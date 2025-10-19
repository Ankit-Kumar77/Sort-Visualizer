/**
 * Algorithm Academy - Advanced Educational Sorting Visualizer
 * Professional JavaScript Architecture for Educational Platform
 */

"use strict";

// Global Application State
const AppState = {
    currentAlgorithm: null,
    arrayData: [],
    isPlaying: false,
    isPaused: false,
    stepMode: false,
    animationSpeed: 1,
    statistics: {
        comparisons: 0,
        arrayAccesses: 0,
        swaps: 0,
        startTime: null
    }
};

// Algorithm Educational Data
const AlgorithmDatabase = {
    welcome: {
        name: "Welcome to Algorithm Academy",
        description: "Choose a sorting algorithm from the dropdown to begin your learning journey. Each algorithm includes detailed explanations, pseudocode, implementation examples, and step-by-step visualization.",
        pseudocode: `Welcome to Algorithm Academy!

Select an algorithm from the sidebar to:
• View detailed complexity analysis
• Study pseudocode implementation  
• See real JavaScript code
• Watch step-by-step visualization
• Track your learning progress

Ready to start learning? Pick an algorithm above! 🚀`,
        implementation: `// Welcome to Algorithm Academy!
// Select an algorithm to view its implementation

class SortingAlgorithm {
    constructor(array, speed) {
        this.array = array;
        this.animationSpeed = speed;
        this.comparisons = 0;
        this.swaps = 0;
    }
    
    // Each algorithm includes:
    // ✓ Clear, commented code
    // ✓ Educational explanations  
    // ✓ Performance metrics
    // ✓ Real-world applications
    
    async visualize() {
        // Professional visualization with:
        // - Step-by-step explanations
        // - Interactive controls
        // - Performance tracking
    }
}`,
        explanation: "Select an algorithm from the dropdown menu to begin learning. Each algorithm provides comprehensive educational content including complexity analysis, pseudocode, implementation details, and interactive visualization."
    },
    
    1: { // Bubble Sort
        name: "Bubble Sort",
        timeComplexity: { best: "O(n)", average: "O(n²)", worst: "O(n²)" },
        spaceComplexity: "O(1)",
        stable: "Yes",
        inPlace: "Yes",
        difficulty: "Beginner",
        description: "Bubble Sort is a fundamental comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they're in the wrong order. Named for the way smaller elements 'bubble' to the beginning of the list.",
        
        pseudocode: `ALGORITHM BubbleSort(A[0...n-1])
// Sorts array A in ascending order using bubble sort
INPUT: Array A[0...n-1] of orderable elements  
OUTPUT: Array A sorted in ascending order

BEGIN
    FOR i ← 0 TO n-2 DO
        swapped ← FALSE
        FOR j ← 0 TO n-i-2 DO
            IF A[j] > A[j+1] THEN
                SWAP A[j] ↔ A[j+1]
                swapped ← TRUE
            END IF
        END FOR
        IF NOT swapped THEN
            BREAK  // Array is already sorted
        END IF
    END FOR
END`,

        implementation: `async bubbleSort(array) {
    const n = array.length;
    let totalComparisons = 0;
    let totalSwaps = 0;
    
    // Outer loop: n-1 passes through the array
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;  // Flag to detect if any swap occurred
        
        // Inner loop: compare adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            // Highlight elements being compared
            await this.visualizer.highlight([j, j + 1], 'comparing');
            
            totalComparisons++;
            this.updateStats('comparisons');
            
            // Compare adjacent elements
            if (array[j] > array[j + 1]) {
                // Swap elements if they're in wrong order
                await this.visualizer.swap(j, j + 1);
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                
                totalSwaps++;
                this.updateStats('swaps');
                swapped = true;
            }
            
            // Wait for animation/user interaction
            await this.pause();
            await this.visualizer.clearHighlights();
        }
        
        // Mark the last element as sorted (largest element is now in place)
        await this.visualizer.markSorted(n - i - 1);
        
        // Optimization: if no swaps occurred, array is sorted
        if (!swapped) {
            this.explainStep(\`Early termination: No swaps in pass \${i + 1}, array is sorted!\`);
            break;
        }
    }
    
    // Mark first element as sorted
    await this.visualizer.markSorted(0);
    return { comparisons: totalComparisons, swaps: totalSwaps };
}`,

        explanation: `<div class="algorithm-overview">
            <h4>How Bubble Sort Works</h4>
            <p>Bubble Sort works by repeatedly comparing adjacent elements and swapping them if they're in the wrong order. Like bubbles rising to the surface, smaller elements "bubble up" to their correct positions.</p>
            
            <div class="algorithm-steps">
                <h5>Algorithm Steps:</h5>
                <ol>
                    <li><strong>Compare Adjacent:</strong> Compare each pair of adjacent elements</li>
                    <li><strong>Swap if Wrong:</strong> If left > right, swap them</li>
                    <li><strong>Bubble Up:</strong> After each pass, the largest element reaches its final position</li>
                    <li><strong>Repeat:</strong> Continue until no swaps are needed</li>
                </ol>
            </div>
            
            <div class="pros-cons">
                <div class="advantages">
                    <h5>✅ Advantages:</h5>
                    <ul>
                        <li>Simple to understand and implement</li>
                        <li>In-place sorting (O(1) space)</li>
                        <li>Stable algorithm (maintains relative order)</li>
                        <li>Can detect if array is already sorted</li>
                        <li>No additional memory required</li>
                    </ul>
                </div>
                <div class="disadvantages">
                    <h5>❌ Disadvantages:</h5>
                    <ul>
                        <li>Poor time complexity O(n²) for average/worst case</li>
                        <li>Many unnecessary comparisons</li>
                        <li>Not efficient for large datasets</li>
                        <li>Generally slower than other simple sorts</li>
                    </ul>
                </div>
            </div>
            
            <div class="real-world-apps">
                <h5>🌟 Real-world Applications:</h5>
                <ul>
                    <li><strong>Education:</strong> Teaching fundamental sorting concepts</li>
                    <li><strong>Small datasets:</strong> When simplicity is more important than efficiency</li>
                    <li><strong>Nearly sorted data:</strong> Can terminate early with optimization</li>
                    <li><strong>Embedded systems:</strong> Where memory is extremely limited</li>
                </ul>
            </div>
        </div>`
    },
    
    2: { // Selection Sort
        name: "Selection Sort",
        timeComplexity: { best: "O(n²)", average: "O(n²)", worst: "O(n²)" },
        spaceComplexity: "O(1)",
        stable: "No",
        inPlace: "Yes",
        difficulty: "Beginner",
        description: "Selection Sort divides the array into sorted and unsorted portions. It repeatedly finds the minimum element from the unsorted portion and places it at the beginning of the sorted portion.",
        
        pseudocode: `ALGORITHM SelectionSort(A[0...n-1])
// Sorts array A in ascending order using selection sort
INPUT: Array A[0...n-1] of orderable elements
OUTPUT: Array A sorted in ascending order

BEGIN
    FOR i ← 0 TO n-2 DO
        minIndex ← i
        FOR j ← i+1 TO n-1 DO
            IF A[j] < A[minIndex] THEN
                minIndex ← j
            END IF
        END FOR
        SWAP A[i] ↔ A[minIndex]
    END FOR
END`,

        implementation: `async selectionSort(array) {
    const n = array.length;
    let totalComparisons = 0;
    let totalSwaps = 0;
    
    // Move boundary of unsorted subarray one by one
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;  // Assume first element is minimum
        
        // Highlight current position being filled
        await this.visualizer.highlight([i], 'current');
        this.explainStep(\`Finding minimum element for position \${i}\`);
        
        // Find minimum element in remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            await this.visualizer.highlight([j, minIndex], 'comparing');
            
            totalComparisons++;
            this.updateStats('comparisons');
            
            // Update minimum if current element is smaller
            if (array[j] < array[minIndex]) {
                await this.visualizer.clearHighlight(minIndex);
                minIndex = j;
                await this.visualizer.highlight([minIndex], 'minimum');
                this.explainStep(\`New minimum found: \${array[j]} at position \${j}\`);
            }
            
            await this.pause();
            await this.visualizer.clearHighlight(j);
        }
        
        // Swap found minimum element with first element
        if (minIndex !== i) {
            await this.visualizer.swap(i, minIndex);
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            totalSwaps++;
            this.updateStats('swaps');
            this.explainStep(\`Swapped \${array[minIndex]} with \${array[i]}\`);
        }
        
        // Mark position as sorted
        await this.visualizer.markSorted(i);
        await this.visualizer.clearHighlights();
    }
    
    // Mark last element as sorted
    await this.visualizer.markSorted(n - 1);
    return { comparisons: totalComparisons, swaps: totalSwaps };
}`,

        explanation: `<div class="algorithm-overview">
            <h4>How Selection Sort Works</h4>
            <p>Selection Sort maintains two subarrays: sorted (left) and unsorted (right). It repeatedly selects the minimum element from the unsorted portion and places it at the end of the sorted portion.</p>
            
            <div class="algorithm-steps">
                <h5>Algorithm Steps:</h5>
                <ol>
                    <li><strong>Find Minimum:</strong> Search unsorted portion for smallest element</li>
                    <li><strong>Swap:</strong> Place minimum at the beginning of unsorted portion</li>
                    <li><strong>Expand Sorted:</strong> The sorted portion grows by one element</li>
                    <li><strong>Repeat:</strong> Continue until entire array is sorted</li>
                </ol>
            </div>
            
            <div class="pros-cons">
                <div class="advantages">
                    <h5>✅ Advantages:</h5>
                    <ul>
                        <li>Simple implementation</li>
                        <li>In-place sorting (O(1) space)</li>
                        <li>Minimizes number of swaps (only n-1 swaps)</li>
                        <li>Works well on small arrays</li>
                        <li>Performance doesn't depend on initial order</li>
                    </ul>
                </div>
                <div class="disadvantages">
                    <h5>❌ Disadvantages:</h5>
                    <ul>
                        <li>O(n²) time complexity in all cases</li>
                        <li>Not stable (may change relative order)</li>
                        <li>More comparisons than insertion sort</li>
                        <li>No early termination possible</li>
                        <li>Poor performance on large datasets</li>
                    </ul>
                </div>
            </div>
            
            <div class="real-world-apps">
                <h5>🌟 Real-world Applications:</h5>
                <ul>
                    <li><strong>Memory-constrained systems:</strong> When swaps are expensive</li>
                    <li><strong>Small datasets:</strong> Where simplicity matters</li>
                    <li><strong>Educational purposes:</strong> Demonstrates selection-based sorting</li>
                    <li><strong>When write operations are costly:</strong> Minimizes number of writes</li>
                </ul>
            </div>
        </div>`
    },
    
    3: { // Insertion Sort
        name: "Insertion Sort",
        timeComplexity: { best: "O(n)", average: "O(n²)", worst: "O(n²)" },
        spaceComplexity: "O(1)",
        stable: "Yes",
        inPlace: "Yes",
        difficulty: "Beginner",
        description: "Insertion Sort builds the final sorted array one element at a time. It works by taking elements from the unsorted portion and inserting them into their correct position in the sorted portion.",
        
        pseudocode: `ALGORITHM InsertionSort(A[0...n-1])
// Sorts array A in ascending order using insertion sort
INPUT: Array A[0...n-1] of orderable elements
OUTPUT: Array A sorted in ascending order

BEGIN
    FOR i ← 1 TO n-1 DO
        key ← A[i]
        j ← i-1
        WHILE j ≥ 0 AND A[j] > key DO
            A[j+1] ← A[j]
            j ← j-1
        END WHILE
        A[j+1] ← key
    END FOR
END`,

        implementation: `async insertionSort(array) {
    const n = array.length;
    let totalComparisons = 0;
    let totalShifts = 0;
    
    // Start from second element (index 1)
    for (let i = 1; i < n; i++) {
        let key = array[i];  // Element to be inserted
        let j = i - 1;       // Start of sorted portion
        
        // Highlight the key element being inserted
        await this.visualizer.highlight([i], 'current');
        this.explainStep(\`Inserting \${key} into sorted portion\`);
        
        // Shift elements that are greater than key
        while (j >= 0) {
            await this.visualizer.highlight([j], 'comparing');
            totalComparisons++;
            this.updateStats('comparisons');
            
            if (array[j] > key) {
                // Shift element to the right
                array[j + 1] = array[j];
                await this.visualizer.updateBar(j + 1, array[j + 1]);
                totalShifts++;
                this.updateStats('swaps');
                
                this.explainStep(\`\${array[j]} > \${key}, shifting right\`);
                j--;
            } else {
                this.explainStep(\`\${array[j]} ≤ \${key}, found insertion point\`);
                break;
            }
            
            await this.pause();
            await this.visualizer.clearHighlight(j + 1);
        }
        
        // Insert key at correct position
        array[j + 1] = key;
        await this.visualizer.updateBar(j + 1, key);
        this.explainStep(\`Inserted \${key} at position \${j + 1}\`);
        
        // Mark elements as sorted so far
        for (let k = 0; k <= i; k++) {
            await this.visualizer.highlight([k], 'sorted');
        }
        
        await this.pause();
        await this.visualizer.clearHighlights();
    }
    
    // Mark all elements as sorted
    for (let i = 0; i < n; i++) {
        await this.visualizer.markSorted(i);
    }
    
    return { comparisons: totalComparisons, shifts: totalShifts };
}`,

        explanation: `<div class="algorithm-overview">
            <h4>How Insertion Sort Works</h4>
            <p>Insertion Sort is like organizing playing cards in your hand. You pick up cards one by one and insert each into its correct position among the previously sorted cards.</p>
            
            <div class="algorithm-steps">
                <h5>Algorithm Steps:</h5>
                <ol>
                    <li><strong>Start from second element:</strong> Assume first element is already sorted</li>
                    <li><strong>Pick current element:</strong> This is the 'key' to be inserted</li>
                    <li><strong>Compare and shift:</strong> Move larger elements one position right</li>
                    <li><strong>Insert key:</strong> Place key in the correct position</li>
                    <li><strong>Repeat:</strong> Continue for all remaining elements</li>
                </ol>
            </div>
            
            <div class="pros-cons">
                <div class="advantages">
                    <h5>✅ Advantages:</h5>
                    <ul>
                        <li>Efficient for small datasets</li>
                        <li>Adaptive: O(n) for nearly sorted arrays</li>
                        <li>Stable: maintains relative order</li>
                        <li>In-place: O(1) space complexity</li>
                        <li>Online: can sort as it receives data</li>
                        <li>Simple implementation</li>
                    </ul>
                </div>
                <div class="disadvantages">
                    <h5>❌ Disadvantages:</h5>
                    <ul>
                        <li>O(n²) time complexity for average/worst case</li>
                        <li>More writes compared to selection sort</li>
                        <li>Inefficient for large datasets</li>
                        <li>Performance depends heavily on input order</li>
                    </ul>
                </div>
            </div>
            
            <div class="real-world-apps">
                <h5>🌟 Real-world Applications:</h5>
                <ul>
                    <li><strong>Small arrays:</strong> Often used as base case in hybrid algorithms</li>
                    <li><strong>Nearly sorted data:</strong> Excellent performance on almost-sorted arrays</li>
                    <li><strong>Online algorithms:</strong> Can sort data as it arrives</li>
                    <li><strong>Hybrid algorithms:</strong> Used in Quicksort and Mergesort for small subarrays</li>
                </ul>
            </div>
        </div>`
    },
    
    4: { // Merge Sort
        name: "Merge Sort",
        timeComplexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)" },
        spaceComplexity: "O(n)",
        stable: "Yes",
        inPlace: "No",
        difficulty: "Intermediate",
        description: "Merge Sort is a divide-and-conquer algorithm that recursively divides the array into halves, sorts them separately, and then merges the sorted halves back together.",
        
        pseudocode: `ALGORITHM MergeSort(A[0...n-1])
// Sorts array A using divide-and-conquer approach
INPUT: Array A[0...n-1] of orderable elements
OUTPUT: Array A sorted in ascending order

BEGIN
    IF length(A) ≤ 1 THEN
        RETURN A  // Base case
    END IF
    
    mid ← length(A) / 2
    left ← A[0...mid-1]
    right ← A[mid...n-1]
    
    left ← MergeSort(left)   // Recursive call
    right ← MergeSort(right) // Recursive call
    
    RETURN Merge(left, right)
END

ALGORITHM Merge(left, right)
    result ← empty array
    i ← 0, j ← 0
    
    WHILE i < length(left) AND j < length(right) DO
        IF left[i] ≤ right[j] THEN
            result.append(left[i])
            i ← i + 1
        ELSE
            result.append(right[j])
            j ← j + 1
        END IF
    END WHILE
    
    // Add remaining elements
    WHILE i < length(left) DO
        result.append(left[i])
        i ← i + 1
    END WHILE
    
    WHILE j < length(right) DO
        result.append(right[j])
        j ← j + 1
    END WHILE
    
    RETURN result
END`,

        implementation: `async mergeSort(array, start = 0, end = array.length - 1) {
    if (start >= end) return;  // Base case
    
    const mid = Math.floor((start + end) / 2);
    
    // Divide: Highlight the current subarray being divided
    await this.visualizer.highlightRange(start, end, 'current');
    this.explainStep(\`Dividing array[\${start}...\${end}] at position \${mid}\`);
    await this.pause();
    
    // Conquer: Recursively sort left and right halves
    await this.mergeSort(array, start, mid);
    await this.mergeSort(array, mid + 1, end);
    
    // Combine: Merge the sorted halves
    await this.merge(array, start, mid, end);
}

async merge(array, start, mid, end) {
    // Create temporary arrays for left and right subarrays
    const left = array.slice(start, mid + 1);
    const right = array.slice(mid + 1, end + 1);
    
    let i = 0, j = 0, k = start;
    
    this.explainStep(\`Merging subarrays: [\${start}...\${mid}] and [\${mid+1}...\${end}]\`);
    
    // Merge the temporary arrays back into array[start...end]
    while (i < left.length && j < right.length) {
        await this.visualizer.highlightRange(start, end, 'comparing');
        this.updateStats('comparisons');
        
        if (left[i] <= right[j]) {
            array[k] = left[i];
            this.explainStep(\`\${left[i]} ≤ \${right[j]}, placing \${left[i]} at position \${k}\`);
            i++;
        } else {
            array[k] = right[j];
            this.explainStep(\`\${right[j]} < \${left[i]}, placing \${right[j]} at position \${k}\`);
            j++;
        }
        
        await this.visualizer.updateBar(k, array[k]);
        k++;
        await this.pause();
    }
    
    // Copy remaining elements
    while (i < left.length) {
        array[k] = left[i];
        await this.visualizer.updateBar(k, array[k]);
        i++; k++;
    }
    
    while (j < right.length) {
        array[k] = right[j];
        await this.visualizer.updateBar(k, array[k]);
        j++; k++;
    }
    
    // Mark merged section as partially sorted
    await this.visualizer.highlightRange(start, end, 'sorted');
    this.explainStep(\`Merged subarray [\${start}...\${end}] successfully\`);
    await this.pause();
}`,

        explanation: `<div class="algorithm-overview">
            <h4>How Merge Sort Works</h4>
            <p>Merge Sort follows the divide-and-conquer paradigm: divide the problem into smaller subproblems, solve them recursively, then combine the solutions.</p>
            
            <div class="algorithm-steps">
                <h5>Algorithm Steps:</h5>
                <ol>
                    <li><strong>Divide:</strong> Split array into two halves</li>
                    <li><strong>Conquer:</strong> Recursively sort both halves</li>
                    <li><strong>Combine:</strong> Merge the two sorted halves</li>
                    <li><strong>Base case:</strong> Arrays of size ≤ 1 are already sorted</li>
                </ol>
            </div>
            
            <div class="pros-cons">
                <div class="advantages">
                    <h5>✅ Advantages:</h5>
                    <ul>
                        <li>Guaranteed O(n log n) performance</li>
                        <li>Stable algorithm</li>
                        <li>Predictable performance (best = worst case)</li>
                        <li>Parallelizable</li>
                        <li>Works well with large datasets</li>
                    </ul>
                </div>
                <div class="disadvantages">
                    <h5>❌ Disadvantages:</h5>
                    <ul>
                        <li>O(n) extra space required</li>
                        <li>More complex than simple sorts</li>
                        <li>Not in-place</li>
                        <li>Slower than quicksort in practice</li>
                    </ul>
                </div>
            </div>
            
            <div class="real-world-apps">
                <h5>🌟 Real-world Applications:</h5>
                <ul>
                    <li><strong>External sorting:</strong> When data doesn't fit in memory</li>
                    <li><strong>Stable sorting:</strong> When original order of equal elements matters</li>
                    <li><strong>Parallel processing:</strong> Easy to parallelize</li>
                    <li><strong>Library implementations:</strong> Used in Java, Python, and other languages</li>
                </ul>
            </div>
        </div>`
    },
    
    5: { // Quick Sort
        name: "Quick Sort",
        timeComplexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n²)" },
        spaceComplexity: "O(log n)",
        stable: "No",
        inPlace: "Yes",
        difficulty: "Intermediate",
        description: "Quick Sort is a highly efficient divide-and-conquer algorithm that selects a 'pivot' element and partitions the array around it, then recursively sorts the partitions.",
        
        pseudocode: `ALGORITHM QuickSort(A[0...n-1], low, high)
// Sorts array A using quicksort algorithm
INPUT: Array A, low and high indices
OUTPUT: Array A sorted in ascending order

BEGIN
    IF low < high THEN
        // Partition array and get pivot index
        pivotIndex ← Partition(A, low, high)
        
        // Recursively sort elements before and after pivot
        QuickSort(A, low, pivotIndex - 1)
        QuickSort(A, pivotIndex + 1, high)
    END IF
END

ALGORITHM Partition(A, low, high)
    pivot ← A[high]  // Choose last element as pivot
    i ← low - 1      // Index of smaller element
    
    FOR j ← low TO high-1 DO
        IF A[j] ≤ pivot THEN
            i ← i + 1
            SWAP A[i] ↔ A[j]
        END IF
    END FOR
    
    SWAP A[i+1] ↔ A[high]  // Place pivot in correct position
    RETURN i + 1
END`,

        implementation: `async quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        // Highlight current subarray being sorted
        await this.visualizer.highlightRange(low, high, 'current');
        this.explainStep(\`QuickSort: sorting subarray [\${low}...\${high}]\`);
        
        // Partition array and get pivot index
        const pivotIndex = await this.partition(array, low, high);
        
        // Recursively sort elements before pivot
        await this.quickSort(array, low, pivotIndex - 1);
        
        // Recursively sort elements after pivot
        await this.quickSort(array, pivotIndex + 1, high);
    }
}

async partition(array, low, high) {
    const pivot = array[high];  // Choose rightmost element as pivot
    let i = low - 1;            // Index of smaller element
    
    // Highlight pivot element
    await this.visualizer.highlight([high], 'pivot');
    this.explainStep(\`Partitioning with pivot = \${pivot}\`);
    
    for (let j = low; j < high; j++) {
        await this.visualizer.highlight([j], 'comparing');
        this.updateStats('comparisons');
        
        // If current element is smaller than or equal to pivot
        if (array[j] <= pivot) {
            i++;  // Increment index of smaller element
            
            if (i !== j) {
                await this.visualizer.swap(i, j);
                [array[i], array[j]] = [array[j], array[i]];
                this.updateStats('swaps');
                this.explainStep(\`\${array[i]} ≤ \${pivot}, swapping with position \${i}\`);
            } else {
                this.explainStep(\`\${array[j]} ≤ \${pivot}, already in correct partition\`);
            }
        } else {
            this.explainStep(\`\${array[j]} > \${pivot}, stays in right partition\`);
        }
        
        await this.pause();
        await this.visualizer.clearHighlight(j);
    }
    
    // Place pivot in correct position
    await this.visualizer.swap(i + 1, high);
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    this.updateStats('swaps');
    
    // Mark pivot as in final position
    await this.visualizer.markSorted(i + 1);
    this.explainStep(\`Pivot \${pivot} placed in final position \${i + 1}\`);
    
    return i + 1;  // Return pivot index
}`,

        explanation: `<div class="algorithm-overview">
            <h4>How Quick Sort Works</h4>
            <p>Quick Sort uses a divide-and-conquer approach with in-place partitioning. It chooses a pivot element and rearranges the array so all smaller elements are before the pivot and larger elements after.</p>
            
            <div class="algorithm-steps">
                <h5>Algorithm Steps:</h5>
                <ol>
                    <li><strong>Choose Pivot:</strong> Select an element as the pivot (often last element)</li>
                    <li><strong>Partition:</strong> Rearrange array so elements ≤ pivot come before, > pivot come after</li>
                    <li><strong>Divide:</strong> Pivot is now in its final sorted position</li>
                    <li><strong>Conquer:</strong> Recursively sort the two partitions</li>
                    <li><strong>Base case:</strong> Subarrays of size ≤ 1 are already sorted</li>
                </ol>
            </div>
            
            <div class="pros-cons">
                <div class="advantages">
                    <h5>✅ Advantages:</h5>
                    <ul>
                        <li>Average case O(n log n) performance</li>
                        <li>In-place sorting (O(log n) space)</li>
                        <li>Cache-efficient due to good locality</li>
                        <li>Often faster than merge sort in practice</li>
                        <li>Widely used and optimized</li>
                    </ul>
                </div>
                <div class="disadvantages">
                    <h5>❌ Disadvantages:</h5>
                    <ul>
                        <li>Worst case O(n²) when pivot is always smallest/largest</li>
                        <li>Not stable</li>
                        <li>Performance depends on pivot selection</li>
                        <li>Can degrade to O(n²) on already sorted arrays</li>
                    </ul>
                </div>
            </div>
            
            <div class="real-world-apps">
                <h5>🌟 Real-world Applications:</h5>
                <ul>
                    <li><strong>General-purpose sorting:</strong> Default in many programming languages</li>
                    <li><strong>Database systems:</strong> Used for sorting query results</li>
                    <li><strong>Operating systems:</strong> Process scheduling and memory management</li>
                    <li><strong>Graphics:</strong> Sorting objects by depth for rendering</li>
                </ul>
            </div>
        </div>`
    },
    
    6: { // Heap Sort
        name: "Heap Sort",
        timeComplexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)" },
        spaceComplexity: "O(1)",
        stable: "No",
        inPlace: "Yes",
        difficulty: "Advanced",
        description: "Heap Sort uses a binary heap data structure to sort elements. It first builds a max heap, then repeatedly extracts the maximum element and places it at the end of the array.",
        
        pseudocode: `ALGORITHM HeapSort(A[0...n-1])
// Sorts array A using heap sort algorithm
INPUT: Array A[0...n-1] of orderable elements
OUTPUT: Array A sorted in ascending order

BEGIN
    // Build max heap
    FOR i ← n/2-1 DOWN TO 0 DO
        Heapify(A, n, i)
    END FOR
    
    // Extract elements from heap one by one
    FOR i ← n-1 DOWN TO 1 DO
        SWAP A[0] ↔ A[i]  // Move current root to end
        Heapify(A, i, 0)  // Call heapify on reduced heap
    END FOR
END

ALGORITHM Heapify(A, heapSize, rootIndex)
    largest ← rootIndex     // Initialize largest as root
    leftChild ← 2*rootIndex + 1
    rightChild ← 2*rootIndex + 2
    
    // Find largest among root and children
    IF leftChild < heapSize AND A[leftChild] > A[largest] THEN
        largest ← leftChild
    END IF
    
    IF rightChild < heapSize AND A[rightChild] > A[largest] THEN
        largest ← rightChild
    END IF
    
    // If largest is not root, swap and recursively heapify
    IF largest ≠ rootIndex THEN
        SWAP A[rootIndex] ↔ A[largest]
        Heapify(A, heapSize, largest)
    END IF
END`,

        implementation: `async heapSort(array) {
    const n = array.length;
    
    // Build max heap (rearrange array)
    this.explainStep('Building max heap from array');
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await this.heapify(array, n, i);
    }
    
    // Extract elements from heap one by one
    for (let i = n - 1; i >= 1; i--) {
        // Move current root to end
        await this.visualizer.highlight([0, i], 'swap');
        this.explainStep(\`Extracting max element \${array[0]} to position \${i}\`);
        
        await this.visualizer.swap(0, i);
        [array[0], array[i]] = [array[i], array[0]];
        this.updateStats('swaps');
        
        // Mark element as sorted
        await this.visualizer.markSorted(i);
        
        // Call heapify on the reduced heap
        this.explainStep(\`Heapifying reduced heap of size \${i}\`);
        await this.heapify(array, i, 0);
    }
    
    // Mark first element as sorted
    await this.visualizer.markSorted(0);
    this.explainStep('Heap sort completed!');
}

async heapify(array, heapSize, rootIndex) {
    let largest = rootIndex;        // Initialize largest as root
    const leftChild = 2 * rootIndex + 1;
    const rightChild = 2 * rootIndex + 2;
    
    // Highlight current node being processed
    await this.visualizer.highlight([rootIndex], 'current');
    this.explainStep(\`Heapifying at root \${rootIndex} (value: \${array[rootIndex]})\`);
    
    // Check if left child exists and is greater than root
    if (leftChild < heapSize) {
        await this.visualizer.highlight([leftChild], 'comparing');
        this.updateStats('comparisons');
        
        if (array[leftChild] > array[largest]) {
            largest = leftChild;
            this.explainStep(\`Left child \${array[leftChild]} > parent \${array[rootIndex]}\`);
        }
    }
    
    // Check if right child exists and is greater than current largest
    if (rightChild < heapSize) {
        await this.visualizer.highlight([rightChild], 'comparing');
        this.updateStats('comparisons');
        
        if (array[rightChild] > array[largest]) {
            largest = rightChild;
            this.explainStep(\`Right child \${array[rightChild]} is largest\`);
        }
    }
    
    // If largest is not root, swap and recursively heapify
    if (largest !== rootIndex) {
        await this.visualizer.swap(rootIndex, largest);
        [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]];
        this.updateStats('swaps');
        
        this.explainStep(\`Swapped \${array[largest]} with \${array[rootIndex]}\`);
        
        // Recursively heapify the affected subtree
        await this.heapify(array, heapSize, largest);
    }
    
    await this.visualizer.clearHighlights();
    await this.pause();
}`,

        explanation: `<div class="algorithm-overview">
            <h4>How Heap Sort Works</h4>
            <p>Heap Sort uses the heap data structure (a complete binary tree) where parent nodes are always greater than their children (max heap). It works by building a heap and repeatedly extracting the maximum element.</p>
            
            <div class="algorithm-steps">
                <h5>Algorithm Steps:</h5>
                <ol>
                    <li><strong>Build Max Heap:</strong> Transform array into a max heap structure</li>
                    <li><strong>Extract Maximum:</strong> Move heap root (max element) to sorted portion</li>
                    <li><strong>Restore Heap:</strong> Heapify the remaining elements</li>
                    <li><strong>Repeat:</strong> Continue until all elements are sorted</li>
                    <li><strong>Heapify:</strong> Ensures parent nodes are larger than children</li>
                </ol>
            </div>
            
            <div class="pros-cons">
                <div class="advantages">
                    <h5>✅ Advantages:</h5>
                    <ul>
                        <li>Guaranteed O(n log n) time complexity</li>
                        <li>In-place sorting (O(1) space)</li>
                        <li>Not sensitive to input data</li>
                        <li>Good worst-case performance</li>
                        <li>Useful for finding top-k elements</li>
                    </ul>
                </div>
                <div class="disadvantages">
                    <h5>❌ Disadvantages:</h5>
                    <ul>
                        <li>Not stable</li>
                        <li>Poor cache performance</li>
                        <li>More complex than simple sorts</li>
                        <li>Slower than quicksort on average</li>
                        <li>Not adaptive to partially sorted data</li>
                    </ul>
                </div>
            </div>
            
            <div class="real-world-apps">
                <h5>🌟 Real-world Applications:</h5>
                <ul>
                    <li><strong>Priority queues:</strong> Operating system task scheduling</li>
                    <li><strong>Top-k problems:</strong> Finding largest/smallest k elements</li>
                    <li><strong>Memory management:</strong> When guaranteed performance is needed</li>
                    <li><strong>Graph algorithms:</strong> Dijkstra's shortest path algorithm</li>
                </ul>
            </div>
        </div>`
    },
    
    7: { // Counting Sort
        name: "Counting Sort",
        timeComplexity: { best: "O(n+k)", average: "O(n+k)", worst: "O(n+k)" },
        spaceComplexity: "O(k)",
        stable: "Yes",
        inPlace: "No",
        difficulty: "Intermediate",
        description: "Counting Sort is a non-comparison based sorting algorithm that works by counting the occurrences of each element. It's efficient when the range of elements (k) is small relative to the number of elements (n).",
        
        pseudocode: `ALGORITHM CountingSort(A[0...n-1])
// Sorts array A using counting sort (non-comparison based)
INPUT: Array A[0...n-1] of integers in range [0...k]
OUTPUT: Array A sorted in ascending order

BEGIN
    // Find maximum element to determine range
    max ← MAX(A)
    
    // Create count array and initialize to 0
    count[0...max] ← 0
    
    // Count occurrences of each element
    FOR i ← 0 TO n-1 DO
        count[A[i]] ← count[A[i]] + 1
    END FOR
    
    // Modify count array to store cumulative counts
    FOR i ← 1 TO max DO
        count[i] ← count[i] + count[i-1]
    END FOR
    
    // Build output array in reverse order (for stability)
    output[0...n-1]
    FOR i ← n-1 DOWN TO 0 DO
        output[count[A[i]] - 1] ← A[i]
        count[A[i]] ← count[A[i]] - 1
    END FOR
    
    // Copy output array back to original array
    FOR i ← 0 TO n-1 DO
        A[i] ← output[i]
    END FOR
END`,

        implementation: `async countingSort(array) {
    const n = array.length;
    const max = Math.max(...array);
    
    this.explainStep(\`Array range: 0 to \${max}. Creating count array.\`);
    
    // Create count array and initialize to 0
    const count = new Array(max + 1).fill(0);
    const output = new Array(n);
    
    // Count occurrences of each element
    this.explainStep('Counting occurrences of each element');
    for (let i = 0; i < n; i++) {
        await this.visualizer.highlight([i], 'current');
        count[array[i]]++;
        this.explainStep(\`Element \${array[i]} appears \${count[array[i]]} times so far\`);
        await this.pause();
    }
    
    // Show count array (visualization helper)
    this.explainStep(\`Count array: [\${count.join(', ')}]\`);
    
    // Modify count array to store cumulative counts
    this.explainStep('Converting to cumulative counts (positions)');
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
        this.updateStats('operations');
    }
    
    this.explainStep(\`Cumulative count: [\${count.join(', ')}]\`);
    
    // Build output array in reverse order to maintain stability
    this.explainStep('Building sorted output array (reverse order for stability)');
    for (let i = n - 1; i >= 0; i--) {
        await this.visualizer.highlight([i], 'current');
        
        const element = array[i];
        const position = count[element] - 1;
        output[position] = element;
        count[element]--;
        
        this.explainStep(\`Placing \${element} at position \${position} in output\`);
        await this.pause();
    }
    
    // Copy output array back to original array
    this.explainStep('Copying sorted elements back to original array');
    for (let i = 0; i < n; i++) {
        array[i] = output[i];
        await this.visualizer.updateBar(i, array[i]);
        await this.visualizer.markSorted(i);
        await this.pause();
    }
    
    this.explainStep('Counting sort completed!');
}`,

        explanation: `<div class="algorithm-overview">
            <h4>How Counting Sort Works</h4>
            <p>Counting Sort doesn't compare elements like traditional sorting algorithms. Instead, it counts how many times each element appears and uses this information to place elements in their correct positions.</p>
            
            <div class="algorithm-steps">
                <h5>Algorithm Steps:</h5>
                <ol>
                    <li><strong>Find Range:</strong> Determine the range of input elements (0 to k)</li>
                    <li><strong>Count Occurrences:</strong> Count how many times each element appears</li>
                    <li><strong>Cumulative Counts:</strong> Transform counts into positions</li>
                    <li><strong>Build Output:</strong> Place elements in sorted order (reverse for stability)</li>
                    <li><strong>Copy Back:</strong> Transfer sorted elements to original array</li>
                </ol>
            </div>
            
            <div class="pros-cons">
                <div class="advantages">
                    <h5>✅ Advantages:</h5>
                    <ul>
                        <li>Linear time complexity O(n+k)</li>
                        <li>Stable sorting algorithm</li>
                        <li>No comparisons needed</li>
                        <li>Predictable performance</li>
                        <li>Efficient for small ranges</li>
                    </ul>
                </div>
                <div class="disadvantages">
                    <h5>❌ Disadvantages:</h5>
                    <ul>
                        <li>Only works with integers in limited range</li>
                        <li>Space complexity O(k) can be large</li>
                        <li>Not suitable for large ranges</li>
                        <li>Not in-place</li>
                        <li>Requires non-negative integers</li>
                    </ul>
                </div>
            </div>
            
            <div class="real-world-apps">
                <h5>🌟 Real-world Applications:</h5>
                <ul>
                    <li><strong>Grade sorting:</strong> When values are in small range (A-F, 0-100)</li>
                    <li><strong>Age sorting:</strong> Limited range of human ages</li>
                    <li><strong>Character sorting:</strong> ASCII values in text processing</li>
                    <li><strong>Radix sort:</strong> Used as subroutine in radix sort</li>
                </ul>
            </div>
        </div>`
    },
    
    8: { // Radix Sort
        name: "Radix Sort",
        timeComplexity: { best: "O(d×(n+k))", average: "O(d×(n+k))", worst: "O(d×(n+k))" },
        spaceComplexity: "O(n+k)",
        stable: "Yes",
        inPlace: "No",
        difficulty: "Advanced",
        description: "Radix Sort is a non-comparison based sorting algorithm that sorts numbers by processing individual digits. It processes digits from least significant to most significant using a stable sorting algorithm (usually counting sort).",
        
        pseudocode: `ALGORITHM RadixSort(A[0...n-1])
// Sorts array A using radix sort (non-comparison based)
INPUT: Array A[0...n-1] of non-negative integers
OUTPUT: Array A sorted in ascending order

BEGIN
    // Find maximum number to know number of digits
    max ← MAX(A)
    
    // Process each digit position (from rightmost)
    digitPosition ← 1
    WHILE max / digitPosition > 0 DO
        CountingSortByDigit(A, digitPosition)
        digitPosition ← digitPosition * 10
    END WHILE
END

ALGORITHM CountingSortByDigit(A[0...n-1], digitPosition)
    count[0...9] ← 0  // For digits 0-9
    output[0...n-1]
    
    // Count occurrences of each digit
    FOR i ← 0 TO n-1 DO
        digit ← (A[i] / digitPosition) % 10
        count[digit] ← count[digit] + 1
    END FOR
    
    // Convert to cumulative counts
    FOR i ← 1 TO 9 DO
        count[i] ← count[i] + count[i-1]
    END FOR
    
    // Build output array (reverse order for stability)
    FOR i ← n-1 DOWN TO 0 DO
        digit ← (A[i] / digitPosition) % 10
        output[count[digit] - 1] ← A[i]
        count[digit] ← count[digit] - 1
    END FOR
    
    // Copy output back to A
    FOR i ← 0 TO n-1 DO
        A[i] ← output[i]
    END FOR
END`,

        implementation: `async radixSort(array) {
    const max = Math.max(...array);
    const maxDigits = Math.floor(Math.log10(max)) + 1;
    
    this.explainStep(\`Maximum value: \${max}, Number of digits: \${maxDigits}\`);
    
    // Process each digit position (from least to most significant)
    for (let digitPosition = 1; Math.floor(max / digitPosition) > 0; digitPosition *= 10) {
        const currentDigit = Math.log10(digitPosition) + 1;
        this.explainStep(\`Sorting by digit position \${currentDigit} (place value: \${digitPosition})\`);
        
        await this.countingSortByDigit(array, digitPosition);
        
        // Show intermediate result
        this.explainStep(\`After sorting by digit \${currentDigit}: [\${array.join(', ')}]\`);
        await this.pause();
    }
    
    // Mark all elements as sorted
    for (let i = 0; i < array.length; i++) {
        await this.visualizer.markSorted(i);
    }
    
    this.explainStep('Radix sort completed!');
}

async countingSortByDigit(array, digitPosition) {
    const n = array.length;
    const count = new Array(10).fill(0);  // For digits 0-9
    const output = new Array(n);
    
    // Count occurrences of each digit at current position
    this.explainStep(\`Counting digits at position (÷\${digitPosition})\`);
    for (let i = 0; i < n; i++) {
        const digit = Math.floor(array[i] / digitPosition) % 10;
        count[digit]++;
        
        await this.visualizer.highlight([i], 'current');
        this.explainStep(\`\${array[i]} → digit \${digit}, count[\${digit}] = \${count[digit]}\`);
        await this.pause();
    }
    
    // Convert to cumulative counts
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    this.explainStep(\`Cumulative counts: [\${count.join(', ')}]\`);
    
    // Build output array in reverse order to maintain stability
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(array[i] / digitPosition) % 10;
        const position = count[digit] - 1;
        
        output[position] = array[i];
        count[digit]--;
        
        await this.visualizer.highlight([i], 'current');
        this.explainStep(\`Placing \${array[i]} (digit \${digit}) at position \${position}\`);
        await this.pause();
    }
    
    // Copy output array back to original array
    for (let i = 0; i < n; i++) {
        array[i] = output[i];
        await this.visualizer.updateBar(i, array[i]);
        this.updateStats('operations');
    }
}`,

        explanation: `<div class="algorithm-overview">
            <h4>How Radix Sort Works</h4>
            <p>Radix Sort processes numbers digit by digit, starting from the least significant digit (rightmost) to the most significant digit (leftmost). It uses a stable sorting algorithm (typically counting sort) for each digit position.</p>
            
            <div class="algorithm-steps">
                <h5>Algorithm Steps:</h5>
                <ol>
                    <li><strong>Find Maximum:</strong> Determine the number with most digits</li>
                    <li><strong>Process Each Digit:</strong> Sort by each digit position (units, tens, hundreds...)</li>
                    <li><strong>Use Stable Sort:</strong> Apply counting sort to maintain relative order</li>
                    <li><strong>Maintain Stability:</strong> Previous orderings are preserved</li>
                    <li><strong>Complete After All Digits:</strong> Final result is fully sorted</li>
                </ol>
            </div>
            
            <div class="pros-cons">
                <div class="advantages">
                    <h5>✅ Advantages:</h5>
                    <ul>
                        <li>Linear time complexity O(d×(n+k))</li>
                        <li>Stable sorting algorithm</li>
                        <li>No comparisons needed</li>
                        <li>Efficient for fixed-length integers</li>
                        <li>Faster than comparison sorts for large datasets</li>
                    </ul>
                </div>
                <div class="disadvantages">
                    <h5>❌ Disadvantages:</h5>
                    <ul>
                        <li>Only works with integers/fixed-length keys</li>
                        <li>Space complexity O(n+k)</li>
                        <li>Performance depends on number of digits (d)</li>
                        <li>Not in-place</li>
                        <li>More complex implementation</li>
                    </ul>
                </div>
            </div>
            
            <div class="real-world-apps">
                <h5>🌟 Real-world Applications:</h5>
                <ul>
                    <li><strong>Large integer datasets:</strong> Sorting millions of numbers efficiently</li>
                    <li><strong>String sorting:</strong> Lexicographic sorting of fixed-length strings</li>
                    <li><strong>Database indexing:</strong> Sorting numeric keys in databases</li>
                    <li><strong>Parallel processing:</strong> Can be efficiently parallelized</li>
                </ul>
            </div>
        </div>`
    }
};

// Main Application Class
class AlgorithmAcademy {
    constructor() {
        this.init();
    }

    async init() {
        this.setupEventListeners();
        this.initializeUI();
        
        // Set initial state
        this.updateAlgorithmInfo('welcome');
        await this.generateArray(20);
        
        console.log('🎓 Algorithm Academy initialized successfully!');
    }

    setupEventListeners() {
        // Algorithm selection
        document.getElementById('algorithmSelect').addEventListener('change', (e) => {
            const algoId = parseInt(e.target.value);
            this.selectAlgorithm(algoId);
        });

        // Array size selection
        document.getElementById('arraySizeSelect').addEventListener('change', (e) => {
            const size = parseInt(e.target.value);
            if (size > 0) this.generateArray(size);
        });

        // Speed control
        document.getElementById('speedSelect').addEventListener('change', (e) => {
            AppState.animationSpeed = parseFloat(e.target.value);
        });

        // Control buttons
        document.getElementById('generateBtn').addEventListener('click', () => {
            this.generateArray();
        });

        document.getElementById('customArrayBtn').addEventListener('click', () => {
            this.showCustomArrayModal();
        });

        document.getElementById('playBtn').addEventListener('click', () => {
            this.startVisualization();
        });

        document.getElementById('pauseBtn').addEventListener('click', () => {
            this.pauseVisualization();
        });

        document.getElementById('stepBtn').addEventListener('click', () => {
            this.toggleStepMode();
        });

        document.getElementById('resetBtn').addEventListener('click', () => {
            this.resetVisualization();
        });

        // Tab switching
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchMode(e.target.id);
            });
        });
    }

    initializeUI() {
        // Set default values
        document.getElementById('arraySizeSelect').value = '20';
        document.getElementById('speedSelect').value = '1';
        
        // Initialize progress
        this.resetStatistics();
    }

    selectAlgorithm(algoId) {
        if (algoId === 0) {
            AppState.currentAlgorithm = null;
            this.updateAlgorithmInfo('welcome');
            this.enablePlayButton(false);
            return;
        }

        AppState.currentAlgorithm = algoId;
        const algo = AlgorithmDatabase[algoId];
        
        if (algo) {
            this.updateAlgorithmInfo(algoId);
            this.updateCodeTabs(algo);
            this.enablePlayButton(true);
            this.showNotification(`${algo.name} selected! Ready to visualize.`, 'success');
        }
    }

    updateAlgorithmInfo(algoId) {
        const algo = AlgorithmDatabase[algoId] || AlgorithmDatabase.welcome;
        const infoContainer = document.getElementById('algorithmInfo');
        
        if (algoId === 'welcome') {
            infoContainer.innerHTML = `<p class="info-placeholder">${algo.description}</p>`;
            return;
        }

        // Check if algorithm is completed
        const isCompleted = window.progressTracker ? 
            window.progressTracker.userProgress.algorithmsCompleted.includes(algoId) : false;
        const completionBadge = isCompleted ? 
            '<span class="completion-badge completed">✅ Completed</span>' :
            '<span class="completion-badge not-completed">⏳ Not Yet Completed</span>';
            
        infoContainer.innerHTML = `
            <div class="algorithm-details">
                <div class="algorithm-header">
                    <h4>${algo.name}</h4>
                    ${completionBadge}
                </div>
                <div class="complexity-summary">
                    <div class="complexity-row">
                        <strong>Time Complexity:</strong>
                        <div class="complexity-badges">
                            <span class="complexity-badge best">Best: ${algo.timeComplexity.best}</span>
                            <span class="complexity-badge avg">Avg: ${algo.timeComplexity.average}</span>
                            <span class="complexity-badge worst">Worst: ${algo.timeComplexity.worst}</span>
                        </div>
                    </div>
                    <div class="complexity-row">
                        <strong>Space:</strong> <span class="complexity-badge space">${algo.spaceComplexity}</span>
                    </div>
                    <div class="properties-row">
                        <span class="property-badge ${algo.stable === 'Yes' ? 'positive' : 'negative'}">
                            ${algo.stable === 'Yes' ? '✓' : '✗'} Stable
                        </span>
                        <span class="property-badge ${algo.inPlace === 'Yes' ? 'positive' : 'negative'}">
                            ${algo.inPlace === 'Yes' ? '✓' : '✗'} In-place
                        </span>
                    </div>
                </div>
                <p class="algorithm-description">${algo.description}</p>
                <div class="algorithm-footer">
                    <div class="difficulty-badge difficulty-${algo.difficulty.toLowerCase()}">${algo.difficulty.toUpperCase()}</div>
                    ${isCompleted ? 
                        '<button class="quiz-btn" onclick="window.algorithmAcademy.activatePracticeMode(); setTimeout(() => { document.getElementById(\'quiz-algorithm\').value = ' + algoId + '; document.getElementById(\'start-quiz\').click(); }, 100);">🧠 Take Quiz</button>' :
                        '<div class="learning-tip">💡 Complete this algorithm to unlock the quiz!</div>'
                    }
                </div>
            </div>
        `;
    }

    updateCodeTabs(algo) {
        document.getElementById('pseudocodeContent').textContent = algo.pseudocode;
        document.getElementById('implementationContent').textContent = algo.implementation;
        document.getElementById('stepExplanation').innerHTML = algo.explanation;
    }

    async generateArray(size = null) {
        if (!size) {
            const sizeSelect = document.getElementById('arraySizeSelect');
            size = parseInt(sizeSelect.value) || 20;
        }

        // Generate random array
        AppState.arrayData = Array.from({ length: size }, () => 
            Math.floor(Math.random() * 90) + 10
        );

        await this.renderArray();
        this.resetStatistics();
        this.updateProgressText('Array generated. Ready to sort!');
    }

    async renderArray() {
        const container = document.getElementById('arrayContainer');
        container.innerHTML = '';

        const maxValue = Math.max(...AppState.arrayData);
        const containerHeight = 300;

        AppState.arrayData.forEach((value, index) => {
            const bar = document.createElement('div');
            bar.className = 'array-bar';
            bar.style.height = `${(value / maxValue) * containerHeight}px`;
            bar.style.width = `${Math.max(4, Math.floor(600 / AppState.arrayData.length) - 2)}px`;
            bar.dataset.value = value;
            bar.dataset.index = index;
            
            // Add value label for smaller arrays
            if (AppState.arrayData.length <= 30) {
                const label = document.createElement('div');
                label.className = 'bar-label';
                label.textContent = value;
                bar.appendChild(label);
            }

            container.appendChild(bar);
        });
    }

    async startVisualization() {
        if (!AppState.currentAlgorithm) {
            this.showNotification('Please select an algorithm first!', 'warning');
            return;
        }

        if (AppState.isPlaying) return;

        AppState.isPlaying = true;
        AppState.isPaused = false;
        this.updateControlStates();
        this.startTimer();
        
        // Increment visualization count
        if (window.progressTracker) {
            window.progressTracker.incrementVisualizationCount();
        }

        try {
            // Create visualizer instance
            const visualizer = new ModernVisualizer();
            const algorithm = new EducationalSorter(
                [...AppState.arrayData], 
                AppState.animationSpeed,
                visualizer,
                this.updateStatistics.bind(this),
                this.explainStep.bind(this)
            );

            // Execute the selected algorithm
            await algorithm.execute(AppState.currentAlgorithm);
            
            // Mark algorithm as completed
            if (window.progressTracker) {
                const firstTime = window.progressTracker.markAlgorithmCompleted(AppState.currentAlgorithm);
                if (firstTime) {
                    this.showNotification(`🎆 First time completing ${AlgorithmDatabase[AppState.currentAlgorithm].name}!`, 'success');
                    // Update the algorithm info display
                    this.updateAlgorithmInfo(AppState.currentAlgorithm);
                }
            }
            
            this.showNotification('🎉 Sorting completed successfully!', 'success');
            this.updateProgressText('Sorting completed!');
            
        } catch (error) {
            if (error.message !== 'Sorting stopped') {
                console.error('Sorting error:', error);
                this.showNotification('An error occurred during sorting', 'error');
            }
        } finally {
            AppState.isPlaying = false;
            this.updateControlStates();
        }
    }

    pauseVisualization() {
        AppState.isPaused = !AppState.isPaused;
        this.updateControlStates();
        this.updateProgressText(AppState.isPaused ? 'Paused' : 'Running...');
    }

    resetVisualization() {
        AppState.isPlaying = false;
        AppState.isPaused = false;
        this.generateArray();
        this.updateControlStates();
        this.resetStatistics();
    }

    toggleStepMode() {
        AppState.stepMode = !AppState.stepMode;
        const stepBtn = document.getElementById('stepBtn');
        stepBtn.innerHTML = AppState.stepMode 
            ? '<i class="fas fa-pause"></i> Step Mode' 
            : '<i class="fas fa-step-forward"></i> Step';
        
        this.showNotification(
            AppState.stepMode ? 'Step mode enabled' : 'Step mode disabled', 
            'info'
        );
    }

    switchTab(tabName) {
        // Remove active class from all tabs and content
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add active class to selected tab and content
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}-tab`).classList.add('active');
    }

    enablePlayButton(enabled) {
        const playBtn = document.getElementById('playBtn');
        playBtn.disabled = !enabled;
        playBtn.style.opacity = enabled ? '1' : '0.5';
    }

    updateControlStates() {
        const playBtn = document.getElementById('playBtn');
        const pauseBtn = document.getElementById('pauseBtn');

        if (AppState.isPlaying) {
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'flex';
            pauseBtn.innerHTML = AppState.isPaused 
                ? '<i class="fas fa-play"></i> Resume' 
                : '<i class="fas fa-pause"></i> Pause';
        } else {
            playBtn.style.display = 'flex';
            pauseBtn.style.display = 'none';
        }
    }

    updateStatistics(type, value = 1) {
        AppState.statistics[type] += value;
        
        const elementMap = {
            comparisons: 'comparisonsCount',
            arrayAccesses: 'accessesCount',
            swaps: 'accessesCount' // Using same counter for now
        };

        const elementId = elementMap[type];
        if (elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = AppState.statistics[type];
            }
        }

        // Update progress bar
        this.updateProgress();
    }

    updateProgress() {
        if (!AppState.currentAlgorithm) return;
        
        const n = AppState.arrayData.length;
        const expectedComparisons = this.getExpectedComparisons(AppState.currentAlgorithm, n);
        const progress = Math.min(100, (AppState.statistics.comparisons / expectedComparisons) * 100);
        
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
    }

    getExpectedComparisons(algoId, n) {
        const estimates = {
            1: n * n / 2,        // Bubble sort
            2: n * (n - 1) / 2,  // Selection sort
            3: n * n / 4,        // Insertion sort (average)
            4: n * Math.log2(n), // Merge sort
            5: n * Math.log2(n), // Quick sort (average)
        };
        return estimates[algoId] || n * n;
    }

    updateProgressText(text) {
        const progressText = document.getElementById('progressText');
        if (progressText) {
            progressText.textContent = text;
        }
    }

    explainStep(explanation) {
        const explanationDiv = document.getElementById('stepExplanation');
        if (explanationDiv && AppState.isPlaying) {
            const stepInfo = explanationDiv.querySelector('.step-info') || 
                           explanationDiv.appendChild(document.createElement('div'));
            stepInfo.className = 'step-info';
            stepInfo.innerHTML = `<strong>Current Step:</strong> ${explanation}`;
        }
    }

    startTimer() {
        AppState.statistics.startTime = Date.now();
        this.timerInterval = setInterval(() => {
            const elapsed = (Date.now() - AppState.statistics.startTime) / 1000;
            const timerElement = document.getElementById('timeElapsed');
            if (timerElement) {
                timerElement.textContent = elapsed.toFixed(1) + 's';
            }
        }, 100);
    }

    resetStatistics() {
        AppState.statistics = {
            comparisons: 0,
            arrayAccesses: 0,
            swaps: 0,
            startTime: null
        };

        ['comparisonsCount', 'accessesCount', 'timeElapsed'].forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = id === 'timeElapsed' ? '0.0s' : '0';
            }
        });

        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.style.width = '0%';
        }

        this.updateProgressText('Ready to start');

        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        // Add notification styles if not already added
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--card-background);
                    border: 1px solid var(--border-color);
                    border-radius: 0.375rem;
                    padding: 1rem;
                    box-shadow: var(--shadow-lg);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    z-index: 1000;
                    min-width: 300px;
                    animation: slideIn 0.3s ease;
                }
                
                .notification-success { border-left: 4px solid var(--success-green); }
                .notification-warning { border-left: 4px solid var(--warning-orange); }
                .notification-error { border-left: 4px solid var(--error-red); }
                .notification-info { border-left: 4px solid var(--accent-blue); }
                
                .notification i {
                    color: var(--primary-navy);
                    font-size: 1.2rem;
                }
                
                .notification-close {
                    background: none;
                    border: none;
                    color: var(--text-light);
                    cursor: pointer;
                    font-size: 1.2rem;
                    margin-left: auto;
                }
                
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(styles);
        }

        document.body.appendChild(notification);

        // Auto remove after 4 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideIn 0.3s ease reverse';
                setTimeout(() => notification.remove(), 300);
            }
        }, 4000);

        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            warning: 'exclamation-triangle',
            error: 'times-circle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    showCustomArrayModal() {
        // Simple implementation for now
        const input = prompt('Enter numbers separated by commas (e.g., 64,34,25,12,22,11,90):');
        if (input) {
            try {
                const numbers = input.split(',').map(str => {
                    const num = parseInt(str.trim());
                    if (isNaN(num) || num < 1 || num > 100) {
                        throw new Error(`Invalid number: ${str.trim()}`);
                    }
                    return num;
                });

                if (numbers.length < 2 || numbers.length > 100) {
                    throw new Error('Please enter 2-100 numbers');
                }

                AppState.arrayData = numbers;
                this.renderArray();
                this.resetStatistics();
                this.showNotification('Custom array applied successfully!', 'success');
                
            } catch (error) {
                this.showNotification(error.message, 'error');
            }
        }
    }

    switchMode(modeId) {
        // Remove active class from all nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to selected button
        document.getElementById(modeId).classList.add('active');
        
        const modes = {
            homeBtn: () => this.activateLearnMode(),
            practiceBtn: () => this.activatePracticeMode(), 
            compareBtn: () => this.activateCompareMode(),
            progressBtn: () => this.activateProgressMode()
        };
        
        if (modes[modeId]) {
            modes[modeId]();
        }
    }
    
    activateLearnMode() {
        this.currentMode = 'learn';
        this.showNotification('Learn Mode: Study algorithms with detailed explanations', 'info');
        document.body.classList.remove('compare-mode', 'practice-mode', 'progress-mode');
        document.body.classList.add('learn-mode');
    }
    
    activatePracticeMode() {
        this.currentMode = 'practice';
        this.showNotification('Practice Mode: Test your knowledge with quizzes', 'info');
        document.body.classList.remove('learn-mode', 'compare-mode', 'progress-mode');
        document.body.classList.add('practice-mode');
        this.showPracticeInterface();
    }
    
    activateCompareMode() {
        this.currentMode = 'compare';
        this.showNotification('Compare Mode: Side-by-side algorithm comparison', 'info');
        document.body.classList.remove('learn-mode', 'practice-mode', 'progress-mode');
        document.body.classList.add('compare-mode');
        this.showCompareInterface();
    }
    
    activateProgressMode() {
        this.currentMode = 'progress';
        this.showNotification('Progress Mode: Track your learning journey', 'info');
        document.body.classList.remove('learn-mode', 'compare-mode', 'practice-mode');
        document.body.classList.add('progress-mode');
        this.showProgressInterface();
    }
    
    showPracticeInterface() {
        const mainContent = document.querySelector('.main-content');
        const quizContainer = document.createElement('div');
        quizContainer.className = 'practice-container';
        quizContainer.innerHTML = `
            <h2>🧠 Algorithm Practice Quiz</h2>
            <div class="quiz-selection">
                <label for="quiz-algorithm">Select Algorithm:</label>
                <select id="quiz-algorithm">
                    <option value="1">Bubble Sort</option>
                    <option value="2">Selection Sort</option>
                    <option value="3">Insertion Sort</option>
                    <option value="4">Merge Sort</option>
                    <option value="5">Quick Sort</option>
                    <option value="6">Heap Sort</option>
                    <option value="7">Counting Sort</option>
                    <option value="8">Radix Sort</option>
                </select>
                <button id="start-quiz">Start Quiz</button>
            </div>
            <div id="quiz-content" class="quiz-content" style="display: none;"></div>
        `;
        
        // Replace main content temporarily
        const originalContent = mainContent.innerHTML;
        mainContent.innerHTML = '';
        mainContent.appendChild(quizContainer);
        
        // Add quiz functionality
        document.getElementById('start-quiz').addEventListener('click', () => {
            const algorithmId = document.getElementById('quiz-algorithm').value;
            this.startQuiz(parseInt(algorithmId));
        });
        
        // Store original content for restoration
        this.originalMainContent = originalContent;
    }
    
    showCompareInterface() {
        const mainContent = document.querySelector('.main-content');
        const compareContainer = document.createElement('div');
        compareContainer.className = 'compare-container';
        compareContainer.innerHTML = `
            <h2>⚖️ Algorithm Comparison</h2>
            <div class="compare-selection">
                <div class="algorithm-selector">
                    <label>Algorithm 1:</label>
                    <select id="compare-algo1">
                        <option value="1">Bubble Sort</option>
                        <option value="2">Selection Sort</option>
                        <option value="3">Insertion Sort</option>
                        <option value="4">Merge Sort</option>
                        <option value="5">Quick Sort</option>
                        <option value="6">Heap Sort</option>
                        <option value="7">Counting Sort</option>
                        <option value="8">Radix Sort</option>
                    </select>
                </div>
                <div class="algorithm-selector">
                    <label>Algorithm 2:</label>
                    <select id="compare-algo2">
                        <option value="1">Bubble Sort</option>
                        <option value="2" selected>Selection Sort</option>
                        <option value="3">Insertion Sort</option>
                        <option value="4">Merge Sort</option>
                        <option value="5">Quick Sort</option>
                        <option value="6">Heap Sort</option>
                        <option value="7">Counting Sort</option>
                        <option value="8">Radix Sort</option>
                    </select>
                </div>
                <button id="start-compare">Compare Algorithms</button>
            </div>
            <div id="comparison-results" class="comparison-results"></div>
        `;
        
        // Replace main content temporarily
        const originalContent = mainContent.innerHTML;
        mainContent.innerHTML = '';
        mainContent.appendChild(compareContainer);
        
        // Add comparison functionality
        document.getElementById('start-compare').addEventListener('click', () => {
            const algo1 = parseInt(document.getElementById('compare-algo1').value);
            const algo2 = parseInt(document.getElementById('compare-algo2').value);
            this.compareAlgorithms(algo1, algo2);
        });
        
        // Store original content for restoration
        this.originalMainContent = originalContent;
    }
    
    showProgressInterface() {
        const mainContent = document.querySelector('.main-content');
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        
        const stats = window.progressTracker ? window.progressTracker.getProgressStats() : {
            completedAlgorithms: 0,
            totalAlgorithms: 8,
            completionRate: 0,
            totalVisualizationsWatched: 0,
            quizzesTaken: 0,
            averageQuizScore: 0
        };
        
        progressContainer.innerHTML = `
            <h2>📊 Learning Progress</h2>
            <div class="progress-stats-grid">
                <div class="progress-stat-card">
                    <div class="stat-number">${stats.completedAlgorithms}</div>
                    <div class="stat-label">Algorithms Completed</div>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${(stats.completedAlgorithms / stats.totalAlgorithms) * 100}%"></div>
                    </div>
                </div>
                <div class="progress-stat-card">
                    <div class="stat-number">${stats.completionRate}%</div>
                    <div class="stat-label">Completion Rate</div>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${stats.completionRate}%"></div>
                    </div>
                </div>
                <div class="progress-stat-card">
                    <div class="stat-number">${stats.totalVisualizationsWatched}</div>
                    <div class="stat-label">Visualizations Watched</div>
                </div>
                <div class="progress-stat-card">
                    <div class="stat-number">${stats.quizzesTaken}</div>
                    <div class="stat-label">Quizzes Taken</div>
                </div>
                <div class="progress-stat-card">
                    <div class="stat-number">${stats.averageQuizScore}%</div>
                    <div class="stat-label">Average Quiz Score</div>
                </div>
            </div>
            <div class="achievements-section">
                <h3>🏆 Achievements</h3>
                <div class="achievements-grid" id="achievements-grid">
                    <!-- Achievements will be populated here -->
                </div>
            </div>
        `;
        
        // Replace main content temporarily
        const originalContent = mainContent.innerHTML;
        mainContent.innerHTML = '';
        mainContent.appendChild(progressContainer);
        
        this.populateAchievements();
        
        // Store original content for restoration
        this.originalMainContent = originalContent;
    }
    
    startQuiz(algorithmId) {
        const questions = window.quizSystem ? window.quizSystem.getQuiz(algorithmId) : [];
        if (questions.length === 0) {
            this.showNotification('Quiz not available for this algorithm yet!', 'warning');
            return;
        }
        
        const algorithm = AlgorithmDatabase[algorithmId];
        let currentQuestion = 0;
        let userAnswers = [];
        
        const showQuestion = () => {
            const question = questions[currentQuestion];
            const quizContent = document.getElementById('quiz-content');
            quizContent.style.display = 'block';
            
            quizContent.innerHTML = `
                <div class="quiz-header">
                    <h3>${algorithm.name} Quiz</h3>
                    <div class="quiz-progress">
                        Question ${currentQuestion + 1} of ${questions.length}
                    </div>
                </div>
                <div class="quiz-question">
                    <h4>${question.question}</h4>
                    <div class="quiz-options">
                        ${question.options.map((option, index) => `
                            <div class="quiz-option" data-answer="${index}">
                                ${option}
                            </div>
                        `).join('')}
                    </div>
                    <button id="quiz-next" style="display: none;">Next Question</button>
                    <button id="quiz-submit" style="display: none;">Submit Quiz</button>
                </div>
            `;
            
            // Add option click handlers
            document.querySelectorAll('.quiz-option').forEach(option => {
                option.addEventListener('click', () => {
                    // Remove previous selections
                    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
                    option.classList.add('selected');
                    
                    const answer = parseInt(option.dataset.answer);
                    userAnswers[currentQuestion] = answer;
                    
                    // Show appropriate button
                    if (currentQuestion < questions.length - 1) {
                        document.getElementById('quiz-next').style.display = 'block';
                    } else {
                        document.getElementById('quiz-submit').style.display = 'block';
                    }
                });
            });
            
            // Next button handler
            const nextBtn = document.getElementById('quiz-next');
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    currentQuestion++;
                    showQuestion();
                });
            }
            
            // Submit button handler
            const submitBtn = document.getElementById('quiz-submit');
            if (submitBtn) {
                submitBtn.addEventListener('click', () => {
                    this.finishQuiz(algorithmId, questions, userAnswers);
                });
            }
        };
        
        showQuestion();
    }
    
    finishQuiz(algorithmId, questions, userAnswers) {
        const score = window.quizSystem.calculateScore(userAnswers, algorithmId);
        const algorithm = AlgorithmDatabase[algorithmId];
        
        // Record score in progress tracker
        if (window.progressTracker) {
            window.progressTracker.recordQuizScore(algorithmId, score);
        }
        
        // Show results
        const quizContent = document.getElementById('quiz-content');
        let resultsHTML = `
            <div class="quiz-results">
                <h3>Quiz Results: ${algorithm.name}</h3>
                <div class="score-display">
                    <div class="score-circle ${score >= 80 ? 'excellent' : score >= 60 ? 'good' : 'needs-improvement'}">
                        <span class="score">${score}%</span>
                        <span class="label">Score</span>
                    </div>
                </div>
                <div class="quiz-feedback">
        `;
        
        questions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const correct = userAnswer === question.correct;
            
            resultsHTML += `
                <div class="question-result ${correct ? 'correct' : 'incorrect'}">
                    <h4>Q${index + 1}: ${question.question}</h4>
                    <div class="answer-feedback">
                        <div class="user-answer">
                            Your answer: <span class="answer ${correct ? 'correct' : 'wrong'}">${question.options[userAnswer]}</span>
                        </div>
                        ${!correct ? `<div class="correct-answer">Correct answer: <span class="answer correct">${question.options[question.correct]}</span></div>` : ''}
                        <div class="explanation">${question.explanation}</div>
                    </div>
                </div>
            `;
        });
        
        resultsHTML += `
                </div>
                <button id="retake-quiz">Retake Quiz</button>
                <button id="back-to-selection">Back to Selection</button>
            </div>
        `;
        
        quizContent.innerHTML = resultsHTML;
        
        // Add button handlers
        document.getElementById('retake-quiz').addEventListener('click', () => {
            this.startQuiz(algorithmId);
        });
        
        document.getElementById('back-to-selection').addEventListener('click', () => {
            this.showPracticeInterface();
        });
        
        // Show completion notification
        this.showNotification(`Quiz completed! Score: ${score}%`, score >= 80 ? 'success' : score >= 60 ? 'info' : 'warning');
    }
    
    compareAlgorithms(algo1Id, algo2Id) {
        const algorithm1 = AlgorithmDatabase[algo1Id];
        const algorithm2 = AlgorithmDatabase[algo2Id];
        
        if (!algorithm1 || !algorithm2) {
            this.showNotification('Invalid algorithm selection!', 'error');
            return;
        }
        
        const comparisonResults = document.getElementById('comparison-results');
        comparisonResults.innerHTML = `
            <div class="comparison-table">
                <h3>Algorithm Comparison: ${algorithm1.name} vs ${algorithm2.name}</h3>
                <table class="comparison-grid">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>${algorithm1.name}</th>
                            <th>${algorithm2.name}</th>
                            <th>Winner</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Best Time Complexity</strong></td>
                            <td>${algorithm1.timeComplexity.best}</td>
                            <td>${algorithm2.timeComplexity.best}</td>
                            <td>${this.compareBigO(algorithm1.timeComplexity.best, algorithm2.timeComplexity.best, algorithm1.name, algorithm2.name)}</td>
                        </tr>
                        <tr>
                            <td><strong>Average Time Complexity</strong></td>
                            <td>${algorithm1.timeComplexity.average}</td>
                            <td>${algorithm2.timeComplexity.average}</td>
                            <td>${this.compareBigO(algorithm1.timeComplexity.average, algorithm2.timeComplexity.average, algorithm1.name, algorithm2.name)}</td>
                        </tr>
                        <tr>
                            <td><strong>Worst Time Complexity</strong></td>
                            <td>${algorithm1.timeComplexity.worst}</td>
                            <td>${algorithm2.timeComplexity.worst}</td>
                            <td>${this.compareBigO(algorithm1.timeComplexity.worst, algorithm2.timeComplexity.worst, algorithm1.name, algorithm2.name)}</td>
                        </tr>
                        <tr>
                            <td><strong>Space Complexity</strong></td>
                            <td>${algorithm1.spaceComplexity}</td>
                            <td>${algorithm2.spaceComplexity}</td>
                            <td>${this.compareBigO(algorithm1.spaceComplexity, algorithm2.spaceComplexity, algorithm1.name, algorithm2.name)}</td>
                        </tr>
                        <tr>
                            <td><strong>Stability</strong></td>
                            <td>${algorithm1.stable}</td>
                            <td>${algorithm2.stable}</td>
                            <td>${algorithm1.stable === 'Yes' && algorithm2.stable === 'No' ? algorithm1.name : 
                                  algorithm2.stable === 'Yes' && algorithm1.stable === 'No' ? algorithm2.name : 'Tie'}</td>
                        </tr>
                        <tr>
                            <td><strong>In-Place</strong></td>
                            <td>${algorithm1.inPlace}</td>
                            <td>${algorithm2.inPlace}</td>
                            <td>${algorithm1.inPlace === 'Yes' && algorithm2.inPlace === 'No' ? algorithm1.name : 
                                  algorithm2.inPlace === 'Yes' && algorithm1.inPlace === 'No' ? algorithm2.name : 'Tie'}</td>
                        </tr>
                        <tr>
                            <td><strong>Difficulty</strong></td>
                            <td>${algorithm1.difficulty}</td>
                            <td>${algorithm2.difficulty}</td>
                            <td>${this.compareDifficulty(algorithm1.difficulty, algorithm2.difficulty, algorithm1.name, algorithm2.name)}</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="comparison-summary">
                    <h4>Summary & Recommendations</h4>
                    <div class="recommendation-cards">
                        <div class="algo-card">
                            <h5>${algorithm1.name}</h5>
                            <p class="description">${algorithm1.description}</p>
                            <div class="best-for">
                                <strong>Best for:</strong>
                                <ul>
                                    ${this.getBestUseCases(algo1Id).map(useCase => `<li>${useCase}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="algo-card">
                            <h5>${algorithm2.name}</h5>
                            <p class="description">${algorithm2.description}</p>
                            <div class="best-for">
                                <strong>Best for:</strong>
                                <ul>
                                    ${this.getBestUseCases(algo2Id).map(useCase => `<li>${useCase}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.showNotification('Algorithm comparison generated!', 'success');
    }
    
    compareBigO(complexity1, complexity2, name1, name2) {
        const complexityOrder = ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n²)', 'O(n³)', 'O(2^n)'];
        const index1 = complexityOrder.findIndex(c => complexity1.includes(c.substring(2, c.length - 1)));
        const index2 = complexityOrder.findIndex(c => complexity2.includes(c.substring(2, c.length - 1)));
        
        if (index1 === -1 || index2 === -1) return 'Tie';
        if (index1 < index2) return name1;
        if (index2 < index1) return name2;
        return 'Tie';
    }
    
    compareDifficulty(diff1, diff2, name1, name2) {
        const diffOrder = ['Beginner', 'Intermediate', 'Advanced'];
        const index1 = diffOrder.indexOf(diff1);
        const index2 = diffOrder.indexOf(diff2);
        
        if (index1 < index2) return name1 + ' (easier)';
        if (index2 < index1) return name2 + ' (easier)';
        return 'Tie';
    }
    
    getBestUseCases(algorithmId) {
        const useCases = {
            1: ['Learning algorithms', 'Very small datasets', 'Educational purposes'],
            2: ['Small datasets', 'Memory-constrained systems', 'When swaps are expensive'],
            3: ['Nearly sorted data', 'Small datasets', 'Online algorithms'],
            4: ['Large datasets', 'External sorting', 'Guaranteed performance'],
            5: ['General-purpose sorting', 'Average performance', 'In-place sorting needed'],
            6: ['Guaranteed worst-case performance', 'Priority queues', 'Top-k problems'],
            7: ['Small range of integers', 'Stable sorting needed', 'Linear time required'],
            8: ['Large integer datasets', 'Fixed-length keys', 'Parallel processing']
        };
        return useCases[algorithmId] || ['General use'];
    }
    
    populateAchievements() {
        const achievementsGrid = document.getElementById('achievements-grid');
        if (!achievementsGrid) return;
        
        const stats = window.progressTracker ? window.progressTracker.getProgressStats() : {};
        const achievements = [
            {
                id: 'first_algorithm',
                name: 'First Steps',
                description: 'Complete your first algorithm',
                icon: '🎯',
                unlocked: stats.completedAlgorithms >= 1
            },
            {
                id: 'algorithm_master',
                name: 'Algorithm Master',
                description: 'Complete all 8 sorting algorithms',
                icon: '🏆',
                unlocked: stats.completedAlgorithms >= 8
            },
            {
                id: 'quiz_taker',
                name: 'Quiz Master',
                description: 'Take 5 quizzes',
                icon: '🧠',
                unlocked: stats.quizzesTaken >= 5
            },
            {
                id: 'excellent_student',
                name: 'Excellent Student',
                description: 'Average quiz score above 85%',
                icon: '⭐',
                unlocked: stats.averageQuizScore >= 85
            },
            {
                id: 'visualizations_watched',
                name: 'Keen Observer',
                description: 'Watch 20+ visualizations',
                icon: '👁️',
                unlocked: stats.totalVisualizationsWatched >= 20
            }
        ];
        
        achievementsGrid.innerHTML = achievements.map(achievement => `
            <div class="achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}">
                <div class="achievement-icon">${achievement.icon}</div>
                <h4>${achievement.name}</h4>
                <p>${achievement.description}</p>
                <div class="achievement-status">${achievement.unlocked ? '✅ Unlocked' : '🔒 Locked'}</div>
            </div>
        `).join('');
    }
}

// Modern Visualizer Class
class ModernVisualizer {
    constructor() {
        this.container = document.getElementById('arrayContainer');
        this.bars = [];
    }

    async highlight(indices, type = 'comparing') {
        indices.forEach(index => {
            const bar = this.container.children[index];
            if (bar) {
                bar.classList.add(type);
            }
        });
        return new Promise(resolve => setTimeout(resolve, 100));
    }

    async clearHighlights() {
        Array.from(this.container.children).forEach(bar => {
            bar.className = 'array-bar';
        });
        return new Promise(resolve => setTimeout(resolve, 50));
    }

    async clearHighlight(index) {
        const bar = this.container.children[index];
        if (bar) {
            bar.className = 'array-bar';
        }
    }

    async swap(index1, index2) {
        const bar1 = this.container.children[index1];
        const bar2 = this.container.children[index2];
        
        if (bar1 && bar2) {
            // Visual swap animation
            const temp = bar1.style.height;
            bar1.style.height = bar2.style.height;
            bar2.style.height = temp;
            
            // Update data attributes
            const tempValue = bar1.dataset.value;
            bar1.dataset.value = bar2.dataset.value;
            bar2.dataset.value = tempValue;
            
            // Update labels if they exist
            const label1 = bar1.querySelector('.bar-label');
            const label2 = bar2.querySelector('.bar-label');
            if (label1 && label2) {
                const tempLabel = label1.textContent;
                label1.textContent = label2.textContent;
                label2.textContent = tempLabel;
            }
        }
        
        return new Promise(resolve => setTimeout(resolve, 200));
    }

    async markSorted(index) {
        const bar = this.container.children[index];
        if (bar) {
            bar.classList.add('sorted');
        }
    }
    
    // Update bar with new value
    async updateBar(index, value) {
        const bar = this.container.children[index];
        if (bar) {
            const maxValue = Math.max(...AppState.arrayData);
            const height = (value / maxValue) * 280;
            bar.style.height = `${height}px`;
            bar.dataset.value = value;
            
            const label = bar.querySelector('.bar-label');
            if (label) {
                label.textContent = value;
            }
        }
    }
}

// Educational Sorting Engine
class EducationalSorter {
    constructor(array, speed, visualizer, updateStats, explainStep) {
        this.array = array;
        this.speed = speed;
        this.visualizer = visualizer;
        this.updateStats = updateStats;
        this.explainStep = explainStep;
    }

    async execute(algorithmId) {
        switch (algorithmId) {
            case 1:
                return await this.bubbleSort();
            case 2:
                return await this.selectionSort();
            case 3:
                return await this.insertionSort();
            case 4:
                return await this.mergeSort();
            case 5:
                return await this.quickSort();
            case 6:
                return await this.heapSort();
            case 7:
                return await this.countingSort();
            case 8:
                return await this.radixSort();
            default:
                throw new Error('Algorithm not implemented yet');
        }
    }

    async pause() {
        const delay = Math.max(50, 1000 / this.speed);
        
        while (AppState.isPaused && AppState.isPlaying) {
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        if (!AppState.isPlaying) {
            throw new Error('Sorting stopped');
        }
        
        return new Promise(resolve => setTimeout(resolve, delay));
    }

    async bubbleSort() {
        const n = this.array.length;
        this.explainStep('Starting Bubble Sort: comparing adjacent elements and swapping if needed');
        
        for (let i = 0; i < n - 1; i++) {
            let swapped = false;
            this.explainStep(`Pass ${i + 1}: bubbling the largest element to position ${n - i - 1}`);
            
            for (let j = 0; j < n - i - 1; j++) {
                await this.visualizer.highlight([j, j + 1], 'comparing');
                this.explainStep(`Comparing elements at positions ${j} and ${j + 1}: ${this.array[j]} vs ${this.array[j + 1]}`);
                
                this.updateStats('comparisons');
                
                if (this.array[j] > this.array[j + 1]) {
                    await this.visualizer.swap(j, j + 1);
                    [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]];
                    this.updateStats('swaps');
                    this.explainStep(`Swapped! ${this.array[j + 1]} > ${this.array[j]}, so we swapped them`);
                    swapped = true;
                } else {
                    this.explainStep(`No swap needed: ${this.array[j]} ≤ ${this.array[j + 1]}`);
                }
                
                await this.pause();
                await this.visualizer.clearHighlights();
            }
            
            await this.visualizer.markSorted(n - i - 1);
            
            if (!swapped) {
                this.explainStep('No swaps in this pass - array is sorted!');
                break;
            }
        }
        
        await this.visualizer.markSorted(0);
        this.explainStep('Bubble Sort completed! All elements are now in their correct positions.');
    }

    async selectionSort() {
        const n = this.array.length;
        this.explainStep('Starting Selection Sort: finding minimum elements and placing them in order');
        
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            await this.visualizer.highlight([i], 'current');
            this.explainStep(`Pass ${i + 1}: finding minimum element for position ${i}`);
            
            for (let j = i + 1; j < n; j++) {
                await this.visualizer.highlight([j, minIndex], 'comparing');
                this.explainStep(`Comparing ${this.array[j]} with current minimum ${this.array[minIndex]}`);
                
                this.updateStats('comparisons');
                
                if (this.array[j] < this.array[minIndex]) {
                    await this.visualizer.clearHighlight(minIndex);
                    minIndex = j;
                    await this.visualizer.highlight([minIndex], 'minimum');
                    this.explainStep(`New minimum found: ${this.array[j]} at position ${j}`);
                }
                
                await this.pause();
                await this.visualizer.clearHighlight(j);
            }
            
            if (minIndex !== i) {
                await this.visualizer.swap(i, minIndex);
                [this.array[i], this.array[minIndex]] = [this.array[minIndex], this.array[i]];
                this.updateStats('swaps');
                this.explainStep(`Placed minimum element ${this.array[i]} in position ${i}`);
            }
            
            await this.visualizer.markSorted(i);
            await this.visualizer.clearHighlights();
        }
        
        await this.visualizer.markSorted(n - 1);
        this.explainStep('Selection Sort completed! All elements are in their correct positions.');
    }

    // Insertion Sort Implementation
    async insertionSort() {
        const n = this.array.length;
        this.explainStep('Starting Insertion Sort: inserting each element into its correct position');
        
        for (let i = 1; i < n; i++) {
            let key = this.array[i];
            let j = i - 1;
            
            await this.visualizer.highlight([i], 'current');
            this.explainStep(`Inserting element ${key} from position ${i} into sorted portion`);
            
            while (j >= 0) {
                await this.visualizer.highlight([j], 'comparing');
                this.updateStats('comparisons');
                
                if (this.array[j] > key) {
                    this.array[j + 1] = this.array[j];
                    await this.visualizer.updateBar(j + 1, this.array[j + 1]);
                    this.updateStats('swaps');
                    this.explainStep(`${this.array[j + 1]} > ${key}, shifting right`);
                    j--;
                } else {
                    this.explainStep(`${this.array[j]} ≤ ${key}, found insertion point`);
                    break;
                }
                
                await this.pause();
            }
            
            this.array[j + 1] = key;
            await this.visualizer.updateBar(j + 1, key);
            this.explainStep(`Inserted ${key} at position ${j + 1}`);
            
            await this.pause();
            await this.visualizer.clearHighlights();
        }
        
        for (let i = 0; i < n; i++) {
            await this.visualizer.markSorted(i);
        }
        this.explainStep('Insertion Sort completed!');
    }

    // Merge Sort Implementation
    async mergeSort(start = 0, end = this.array.length - 1) {
        if (start >= end) return;
        
        const mid = Math.floor((start + end) / 2);
        this.explainStep(`Dividing array[${start}...${end}] at position ${mid}`);
        
        await this.mergeSort(start, mid);
        await this.mergeSort(mid + 1, end);
        await this.merge(start, mid, end);
    }

    async merge(start, mid, end) {
        const left = this.array.slice(start, mid + 1);
        const right = this.array.slice(mid + 1, end + 1);
        
        let i = 0, j = 0, k = start;
        this.explainStep(`Merging subarrays: [${start}...${mid}] and [${mid+1}...${end}]`);
        
        while (i < left.length && j < right.length) {
            this.updateStats('comparisons');
            
            if (left[i] <= right[j]) {
                this.array[k] = left[i];
                this.explainStep(`${left[i]} ≤ ${right[j]}, placing ${left[i]} at position ${k}`);
                i++;
            } else {
                this.array[k] = right[j];
                this.explainStep(`${right[j]} < ${left[i]}, placing ${right[j]} at position ${k}`);
                j++;
            }
            
            await this.visualizer.updateBar(k, this.array[k]);
            k++;
            await this.pause();
        }
        
        while (i < left.length) {
            this.array[k] = left[i];
            await this.visualizer.updateBar(k, this.array[k]);
            i++; k++;
        }
        
        while (j < right.length) {
            this.array[k] = right[j];
            await this.visualizer.updateBar(k, this.array[k]);
            j++; k++;
        }
        
        this.explainStep(`Merged subarray [${start}...${end}] successfully`);
    }

    // Quick Sort Implementation
    async quickSort(low = 0, high = this.array.length - 1) {
        if (low < high) {
            this.explainStep(`QuickSort: sorting subarray [${low}...${high}]`);
            
            const pivotIndex = await this.partition(low, high);
            await this.quickSort(low, pivotIndex - 1);
            await this.quickSort(pivotIndex + 1, high);
        }
    }

    async partition(low, high) {
        const pivot = this.array[high];
        let i = low - 1;
        
        await this.visualizer.highlight([high], 'pivot');
        this.explainStep(`Partitioning with pivot = ${pivot}`);
        
        for (let j = low; j < high; j++) {
            await this.visualizer.highlight([j], 'comparing');
            this.updateStats('comparisons');
            
            if (this.array[j] <= pivot) {
                i++;
                if (i !== j) {
                    await this.visualizer.swap(i, j);
                    [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
                    this.updateStats('swaps');
                    this.explainStep(`${this.array[i]} ≤ ${pivot}, swapping to partition`);
                }
            }
            
            await this.pause();
        }
        
        await this.visualizer.swap(i + 1, high);
        [this.array[i + 1], this.array[high]] = [this.array[high], this.array[i + 1]];
        this.updateStats('swaps');
        
        await this.visualizer.markSorted(i + 1);
        this.explainStep(`Pivot ${pivot} placed in final position ${i + 1}`);
        
        return i + 1;
    }

    // Heap Sort Implementation
    async heapSort() {
        const n = this.array.length;
        
        this.explainStep('Building max heap from array');
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            await this.heapify(n, i);
        }
        
        for (let i = n - 1; i >= 1; i--) {
            await this.visualizer.swap(0, i);
            [this.array[0], this.array[i]] = [this.array[i], this.array[0]];
            this.updateStats('swaps');
            
            await this.visualizer.markSorted(i);
            this.explainStep(`Extracted max element ${this.array[i]} to position ${i}`);
            
            await this.heapify(i, 0);
        }
        
        await this.visualizer.markSorted(0);
        this.explainStep('Heap sort completed!');
    }

    async heapify(heapSize, rootIndex) {
        let largest = rootIndex;
        const leftChild = 2 * rootIndex + 1;
        const rightChild = 2 * rootIndex + 2;
        
        if (leftChild < heapSize) {
            this.updateStats('comparisons');
            if (this.array[leftChild] > this.array[largest]) {
                largest = leftChild;
            }
        }
        
        if (rightChild < heapSize) {
            this.updateStats('comparisons');
            if (this.array[rightChild] > this.array[largest]) {
                largest = rightChild;
            }
        }
        
        if (largest !== rootIndex) {
            await this.visualizer.swap(rootIndex, largest);
            [this.array[rootIndex], this.array[largest]] = [this.array[largest], this.array[rootIndex]];
            this.updateStats('swaps');
            
            await this.heapify(heapSize, largest);
        }
        
        await this.pause();
    }

    // Counting Sort Implementation
    async countingSort() {
        const n = this.array.length;
        const max = Math.max(...this.array);
        
        this.explainStep(`Array range: 0 to ${max}. Creating count array.`);
        
        const count = new Array(max + 1).fill(0);
        const output = new Array(n);
        
        // Count occurrences
        this.explainStep('Counting occurrences of each element');
        for (let i = 0; i < n; i++) {
            count[this.array[i]]++;
            this.explainStep(`Element ${this.array[i]} appears ${count[this.array[i]]} times`);
            await this.pause();
        }
        
        // Convert to cumulative counts
        for (let i = 1; i <= max; i++) {
            count[i] += count[i - 1];
        }
        
        // Build output array
        for (let i = n - 1; i >= 0; i--) {
            const element = this.array[i];
            const position = count[element] - 1;
            output[position] = element;
            count[element]--;
            
            this.explainStep(`Placing ${element} at position ${position}`);
            await this.pause();
        }
        
        // Copy back to original array
        for (let i = 0; i < n; i++) {
            this.array[i] = output[i];
            await this.visualizer.updateBar(i, this.array[i]);
            await this.visualizer.markSorted(i);
            await this.pause();
        }
        
        this.explainStep('Counting sort completed!');
    }

    // Radix Sort Implementation
    async radixSort() {
        const max = Math.max(...this.array);
        
        this.explainStep(`Maximum value: ${max}`);
        
        for (let digitPosition = 1; Math.floor(max / digitPosition) > 0; digitPosition *= 10) {
            this.explainStep(`Sorting by digit position (÷${digitPosition})`);
            await this.countingSortByDigit(digitPosition);
        }
        
        for (let i = 0; i < this.array.length; i++) {
            await this.visualizer.markSorted(i);
        }
        
        this.explainStep('Radix sort completed!');
    }

    async countingSortByDigit(digitPosition) {
        const n = this.array.length;
        const count = new Array(10).fill(0);
        const output = new Array(n);
        
        // Count digits
        for (let i = 0; i < n; i++) {
            const digit = Math.floor(this.array[i] / digitPosition) % 10;
            count[digit]++;
        }
        
        // Convert to cumulative counts
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        
        // Build output array
        for (let i = n - 1; i >= 0; i--) {
            const digit = Math.floor(this.array[i] / digitPosition) % 10;
            const position = count[digit] - 1;
            output[position] = this.array[i];
            count[digit]--;
        }
        
        // Copy back
        for (let i = 0; i < n; i++) {
            this.array[i] = output[i];
            await this.visualizer.updateBar(i, this.array[i]);
            await this.pause();
        }
    }
}

// Progress Tracking System
class ProgressTracker {
    constructor() {
        this.userProgress = this.loadProgress();
    }
    
    loadProgress() {
        const saved = localStorage.getItem('algorithmAcademyProgress');
        return saved ? JSON.parse(saved) : {
            algorithmsCompleted: [],
            quizScores: {},
            totalVisualizationsWatched: 0,
            favoriteAlgorithms: [],
            lastActivity: null
        };
    }
    
    saveProgress() {
        localStorage.setItem('algorithmAcademyProgress', JSON.stringify(this.userProgress));
    }
    
    markAlgorithmCompleted(algorithmId) {
        if (!this.userProgress.algorithmsCompleted.includes(algorithmId)) {
            this.userProgress.algorithmsCompleted.push(algorithmId);
            this.userProgress.lastActivity = new Date().toISOString();
            this.saveProgress();
            return true; // First time completion
        }
        return false; // Already completed
    }
    
    recordQuizScore(algorithmId, score) {
        this.userProgress.quizScores[algorithmId] = score;
        this.userProgress.lastActivity = new Date().toISOString();
        this.saveProgress();
    }
    
    incrementVisualizationCount() {
        this.userProgress.totalVisualizationsWatched++;
        this.saveProgress();
    }
    
    getProgressStats() {
        const totalAlgorithms = 8;
        const completedCount = this.userProgress.algorithmsCompleted.length;
        const completionRate = Math.round((completedCount / totalAlgorithms) * 100);
        
        return {
            completedAlgorithms: completedCount,
            totalAlgorithms,
            completionRate,
            totalVisualizationsWatched: this.userProgress.totalVisualizationsWatched,
            quizzesTaken: Object.keys(this.userProgress.quizScores).length,
            averageQuizScore: this.getAverageQuizScore()
        };
    }
    
    getAverageQuizScore() {
        const scores = Object.values(this.userProgress.quizScores);
        return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b) / scores.length) : 0;
    }
}

// Quiz System
class QuizSystem {
    constructor() {
        this.questions = {
            1: [ // Bubble Sort
                {
                    question: "What is the worst-case time complexity of Bubble Sort?",
                    options: ["O(n)", "O(n log n)", "O(n²)", "O(n³)"],
                    correct: 2,
                    explanation: "Bubble Sort's worst case occurs when the array is reverse sorted, requiring n² comparisons."
                },
                {
                    question: "Bubble Sort is a stable sorting algorithm.",
                    options: ["True", "False"],
                    correct: 0,
                    explanation: "Bubble Sort is stable because equal elements are never swapped, preserving their relative order."
                },
                {
                    question: "What makes Bubble Sort inefficient for large datasets?",
                    options: ["High space complexity", "Many unnecessary comparisons", "Not in-place", "Requires recursion"],
                    correct: 1,
                    explanation: "Bubble Sort makes O(n²) comparisons even when the array is nearly sorted, making it inefficient."
                }
            ],
            2: [ // Selection Sort
                {
                    question: "How many swaps does Selection Sort perform in the worst case?",
                    options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
                    correct: 2,
                    explanation: "Selection Sort performs exactly n-1 swaps regardless of input order, making it O(n)."
                },
                {
                    question: "Selection Sort finds the minimum element in each pass.",
                    options: ["True", "False"],
                    correct: 0,
                    explanation: "Selection Sort works by finding the minimum element in the unsorted portion and placing it in the correct position."
                }
            ],
            3: [ // Insertion Sort
                {
                    question: "What is Insertion Sort's best-case time complexity?",
                    options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
                    correct: 2,
                    explanation: "When the array is already sorted, Insertion Sort only makes n-1 comparisons, achieving O(n) time."
                }
            ],
            4: [ // Merge Sort
                {
                    question: "Merge Sort's time complexity in all cases is:",
                    options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
                    correct: 1,
                    explanation: "Merge Sort always divides the array in half (log n levels) and merges in O(n) time at each level."
                }
            ],
            5: [ // Quick Sort
                {
                    question: "Quick Sort's worst-case occurs when:",
                    options: ["Array is random", "Array is sorted", "Array is reverse sorted", "Both B and C"],
                    correct: 3,
                    explanation: "Quick Sort degrades to O(n²) when the pivot is always the smallest or largest element, which happens in sorted arrays."
                }
            ],
            6: [ // Heap Sort
                {
                    question: "Heap Sort builds a:",
                    options: ["Min heap", "Max heap", "Binary tree", "Balanced tree"],
                    correct: 1,
                    explanation: "Heap Sort builds a max heap to repeatedly extract the maximum element for ascending order sorting."
                }
            ],
            7: [ // Counting Sort
                {
                    question: "Counting Sort is efficient when:",
                    options: ["Range is small", "Array is large", "Elements are unique", "Array is sorted"],
                    correct: 0,
                    explanation: "Counting Sort is efficient when the range of elements (k) is small relative to the number of elements (n)."
                }
            ],
            8: [ // Radix Sort
                {
                    question: "Radix Sort processes digits from:",
                    options: ["Left to right", "Right to left", "Middle outward", "Random order"],
                    correct: 1,
                    explanation: "Radix Sort typically processes digits from least significant (rightmost) to most significant (leftmost)."
                }
            ]
        };
    }
    
    getQuiz(algorithmId) {
        return this.questions[algorithmId] || [];
    }
    
    calculateScore(answers, algorithmId) {
        const questions = this.getQuiz(algorithmId);
        let correct = 0;
        
        answers.forEach((answer, index) => {
            if (answer === questions[index].correct) {
                correct++;
            }
        });
        
        return Math.round((correct / questions.length) * 100);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.algorithmAcademy = new AlgorithmAcademy();
    window.progressTracker = new ProgressTracker();
    window.quizSystem = new QuizSystem();
});
