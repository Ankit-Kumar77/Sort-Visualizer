"use strict";
class Helper {
    constructor(time, list = []) {
        this.time = parseInt(400/time);
        this.list = list;
    }

    mark = async (index) => {
        this.list[index].setAttribute("class", "cell current");
    }

    markSpl = async (index) => {
        this.list[index].setAttribute("class", "cell min");
    }

    unmark = async (index) => {
        this.list[index].setAttribute("class", "cell");
    }
    
    pause = async() => {
        // Wait for pause to be released if paused
        while (isPaused && isPlaying) {
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        // Check if sorting was stopped
        if (!isPlaying) {
            throw new Error('Sorting stopped');
        }
        
        // Handle step mode
        if (stepMode) {
            await this.waitForStep();
        }
        
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, this.time);
        });
    }
    
    waitForStep = async() => {
        return new Promise(resolve => {
            const checkStep = () => {
                if (!stepMode || !isPlaying) {
                    resolve();
                } else {
                    setTimeout(checkStep, 100);
                }
            };
            checkStep();
        });
    }

    compare = async (index1, index2) => {
        await this.pause();
        sortingStats.comparisons++;
        let value1 = Number(this.list[index1].getAttribute("value"));
        let value2 = Number(this.list[index2].getAttribute("value"));
        if(value1 > value2) {
            return true;
        }
        return false;
    }

    swap = async (index1, index2) => {
        await this.pause();
        sortingStats.swaps++;
        let value1 = this.list[index1].getAttribute("value");
        let value2 = this.list[index2].getAttribute("value");
        this.list[index1].setAttribute("value", value2);
        this.list[index1].style.height = `${3.8*value2}px`;
        this.list[index2].setAttribute("value", value1);
        this.list[index2].style.height = `${3.8*value1}px`;
        
        // Play subtle swap sound
        this.playSwapSound();
    }
    
    playSwapSound = () => {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
        } catch (e) {
            // Audio not supported
        }
    }
};