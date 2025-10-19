"use strict";
class sortAlgorithms {
    constructor(time) {
        this.list = document.querySelectorAll(".cell");
        this.size = this.list.length;
        this.time = time;
        this.help = new Helper(this.time, this.list);
    }

    // BUBBLE SORT
    BubbleSort = async () => {
        for(let i = 0 ; i < this.size - 1 ; ++i) {
            for(let j = 0 ; j < this.size - i - 1 ; ++j) {
                await this.help.mark(j);
                await this.help.mark(j+1);
                if(await this.help.compare(j, j+1)) {
                    await this.help.swap(j, j+1);
                }
                await this.help.unmark(j);
                await this.help.unmark(j+1);
            }
            this.list[this.size - i - 1].setAttribute("class", "cell done");
        }
        this.list[0].setAttribute("class", "cell done");
    }

    // INSERTION SORT
    InsertionSort = async () => {
        for(let i = 0 ; i < this.size - 1 ; ++i) {
            let j = i;
            while(j >= 0 && await this.help.compare(j, j+1)) {
                await this.help.mark(j);
                await this.help.mark(j+1);
                await this.help.pause();
                await this.help.swap(j, j+1);
                await this.help.unmark(j);
                await this.help.unmark(j+1);
                j -= 1;
            }
        }
        for(let counter = 0 ; counter < this.size ; ++counter) {
            this.list[counter].setAttribute("class", "cell done");
        }
    }

    // SELECTION SORT
    SelectionSort = async () => {
        for(let i = 0 ; i < this.size ; ++i) {
            let minIndex = i;
            for(let j = i ; j < this.size ; ++j) {
                await this.help.markSpl(minIndex);
                await this.help.mark(j);
                if(await this.help.compare(minIndex, j)) {
                    await this.help.unmark(minIndex);
                    minIndex = j;
                }
                await this.help.unmark(j);
                await this.help.markSpl(minIndex);
            }
            await this.help.mark(minIndex);
            await this.help.mark(i);
            await this.help.pause();
            await this.help.swap(minIndex, i);
            await this.help.unmark(minIndex);
            this.list[i].setAttribute("class", "cell done");
        }
    }

    // MERGE SORT
    MergeSort = async () => {
        await this.MergeDivider(0, this.size - 1);
        for(let counter = 0 ; counter < this.size ; ++counter) {
            this.list[counter].setAttribute("class", "cell done");
        }
    }

    MergeDivider = async (start, end) => {
        if(start < end) {
            let mid = start + Math.floor((end - start)/2);
            await this.MergeDivider(start, mid);
            await this.MergeDivider(mid+1, end);
            await this.Merge(start, mid, end);
        }
    }

    Merge = async (start, mid, end) => {
        let newList = new Array();
        let frontcounter = start;
        let midcounter = mid + 1;
        
        while(frontcounter <= mid && midcounter <= end) {
            let fvalue = Number(this.list[frontcounter].getAttribute("value"));
            let svalue = Number(this.list[midcounter].getAttribute("value"));
            if(fvalue >= svalue) {
                newList.push(svalue);
                ++midcounter;
            }
            else {
                newList.push(fvalue);
                ++frontcounter;
            }
        }
        while(frontcounter <= mid) {
            newList.push(Number(this.list[frontcounter].getAttribute("value")));
            ++frontcounter;
        }
        while(midcounter <= end) {
            newList.push(Number(this.list[midcounter].getAttribute("value")));
            ++midcounter;
        }

        for(let c = start ; c <= end ; ++c) {
            this.list[c].setAttribute("class", "cell current");
        }
        for(let c = start, point = 0 ; c <= end && point < newList.length; 
            ++c, ++point) {
                await this.help.pause();
                this.list[c].setAttribute("value", newList[point]);
                this.list[c].style.height = `${3.5*newList[point]}px`;
        }
        for(let c = start ; c <= end ; ++c) {
            this.list[c].setAttribute("class", "cell");
        }
    }

    // QUICK SORT
    QuickSort = async () => {
        await this.QuickDivider(0, this.size-1);
        for(let c = 0 ; c < this.size ; ++c) {
            this.list[c].setAttribute("class", "cell done");
        }
    }

    QuickDivider = async (start, end) => {
        if(start < end) {
            let pivot = await this.Partition(start, end);
            await this.QuickDivider(start, pivot-1);
            await this.QuickDivider(pivot+1, end);
        }
    }

    Partition = async (start, end) => {
        let pivot = this.list[end].getAttribute("value");
        let prev_index = start - 1;

        await this.help.markSpl(end);
        for(let c = start ; c < end ; ++c) {
            let currValue = Number(this.list[c].getAttribute("value"));
            await this.help.mark(c);
            if(currValue < pivot) {
                prev_index += 1;
                await this.help.mark(prev_index);
                await this.help.swap(c, prev_index);
                await this.help.unmark(prev_index);
            }
            await this.help.unmark(c);
        }
        await this.help.swap(prev_index+1, end);
        await this.help.unmark(end);
        return prev_index + 1;
    }

    // HEAP SORT
    HeapSort = async () => {
        // Build max heap
        for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
            await this.heapify(this.size, i);
        }
        
        // Extract elements from heap one by one
        for (let i = this.size - 1; i > 0; i--) {
            await this.help.mark(0);
            await this.help.mark(i);
            await this.help.swap(0, i);
            await this.help.unmark(0);
            this.list[i].setAttribute("class", "cell done");
            
            // Heapify root element
            await this.heapify(i, 0);
        }
        this.list[0].setAttribute("class", "cell done");
    }
    
    heapify = async (n, i) => {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        
        if (left < n) {
            await this.help.mark(left);
            await this.help.mark(largest);
            if (await this.help.compare(largest, left)) {
                largest = left;
            }
            await this.help.unmark(left);
            await this.help.unmark(i);
        }
        
        if (right < n) {
            await this.help.mark(right);
            await this.help.mark(largest);
            if (await this.help.compare(largest, right)) {
                largest = right;
            }
            await this.help.unmark(right);
            await this.help.unmark(largest === i ? i : largest);
        }
        
        if (largest !== i) {
            await this.help.mark(i);
            await this.help.mark(largest);
            await this.help.swap(i, largest);
            await this.help.unmark(i);
            await this.help.unmark(largest);
            await this.heapify(n, largest);
        }
    }

    // COUNTING SORT
    CountingSort = async () => {
        // Find the maximum value
        let max = 0;
        for (let i = 0; i < this.size; i++) {
            let value = Number(this.list[i].getAttribute("value"));
            if (value > max) {
                max = value;
            }
            await this.help.mark(i);
            await this.help.unmark(i);
        }
        
        // Create count array
        let count = new Array(max + 1).fill(0);
        let output = new Array(this.size);
        
        // Count occurrences
        for (let i = 0; i < this.size; i++) {
            let value = Number(this.list[i].getAttribute("value"));
            count[value]++;
            await this.help.mark(i);
            await this.help.unmark(i);
        }
        
        // Transform count array to position array
        for (let i = 1; i <= max; i++) {
            count[i] += count[i - 1];
        }
        
        // Build output array
        for (let i = this.size - 1; i >= 0; i--) {
            let value = Number(this.list[i].getAttribute("value"));
            output[count[value] - 1] = value;
            count[value]--;
            await this.help.mark(i);
            await this.help.unmark(i);
        }
        
        // Copy output array to original
        for (let i = 0; i < this.size; i++) {
            await this.help.mark(i);
            this.list[i].setAttribute("value", output[i]);
            this.list[i].style.height = `${3.8 * output[i]}px`;
            await this.help.pause();
            this.list[i].setAttribute("class", "cell done");
        }
    }

    // RADIX SORT
    RadixSort = async () => {
        // Find the maximum number to determine number of digits
        let max = 0;
        for (let i = 0; i < this.size; i++) {
            let value = Number(this.list[i].getAttribute("value"));
            if (value > max) {
                max = value;
            }
            await this.help.mark(i);
            await this.help.unmark(i);
        }
        
        // Do counting sort for every digit
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            await this.countingSortByDigit(exp);
        }
        
        // Mark all as done
        for (let i = 0; i < this.size; i++) {
            this.list[i].setAttribute("class", "cell done");
        }
    }
    
    countingSortByDigit = async (exp) => {
        let output = new Array(this.size);
        let count = new Array(10).fill(0);
        
        // Count occurrences of digits
        for (let i = 0; i < this.size; i++) {
            let value = Number(this.list[i].getAttribute("value"));
            let digit = Math.floor(value / exp) % 10;
            count[digit]++;
            await this.help.mark(i);
            await this.help.unmark(i);
        }
        
        // Transform count array
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        
        // Build output array
        for (let i = this.size - 1; i >= 0; i--) {
            let value = Number(this.list[i].getAttribute("value"));
            let digit = Math.floor(value / exp) % 10;
            output[count[digit] - 1] = value;
            count[digit]--;
            await this.help.mark(i);
            await this.help.unmark(i);
        }
        
        // Copy output array back
        for (let i = 0; i < this.size; i++) {
            await this.help.mark(i);
            this.list[i].setAttribute("value", output[i]);
            this.list[i].style.height = `${3.8 * output[i]}px`;
            await this.help.pause();
            await this.help.unmark(i);
        }
    }
};
