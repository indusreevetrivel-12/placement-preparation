const allQuestions = {

    searching:[
{ text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],
     constructors:[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],

     encapsulation:[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],

    abstraction :[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],

     

     protocols:[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],

    osiandtcpip :[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],


     processesandthreads:[
     { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }   
    ],

     memorymanagement:[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],

    deadlock:[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],

     sqlbasics:[
      { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }  
    ],

     sqljoins:[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],


     normalization:[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],


     inheritance:[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],

     indexesandconstraints:[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],

     classesandobjects:[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],


    polymorphism :[
        { text: "Which memory stores data permanently even when power is off?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM (Read Only Memory) is non-volatile memory and retains data without power." },
{ text: "Which memory is volatile in nature?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM loses its data when the system is powered off, so it is volatile." },
{ text: "What does RAM stand for?", options: ["Random Access Memory","Read Access Memory","Rapid Access Module","Run Access Memory"], correct: "Random Access Memory", explanation: "RAM stands for Random Access Memory." },
{ text: "Which memory is fastest in a computer?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "Registers are inside the CPU and are the fastest memory units." },
{ text: "Which memory is used to speed up CPU operations?", options: ["Cache","ROM","Hard Disk","DVD"], correct: "Cache", explanation: "Cache memory stores frequently used data for faster CPU access." },
{ text: "Which memory lies between CPU and RAM?", options: ["Cache","ROM","SSD","Register"], correct: "Cache", explanation: "Cache memory acts as a bridge between CPU and RAM for speed improvement." },
{ text: "Which of these is secondary memory?", options: ["Hard Disk","RAM","Cache","Register"], correct: "Hard Disk", explanation: "Hard Disk is secondary storage used for permanent data storage." },
{ text: "Which memory is directly accessed by CPU first?", options: ["Register","Hard Disk","RAM","ROM"], correct: "Register", explanation: "CPU checks registers first because they are the fastest storage units." },
{ text: "Which memory stores BIOS program?", options: ["ROM","RAM","Cache","SSD"], correct: "ROM", explanation: "BIOS is stored in ROM so it remains available after power off." },
{ text: "Which memory has highest capacity generally?", options: ["Hard Disk","Register","Cache","RAM"], correct: "Hard Disk", explanation: "Hard disks usually provide much larger storage than RAM or cache." },
{ text: "Which memory is temporary storage?", options: ["RAM","ROM","SSD","CD"], correct: "RAM", explanation: "RAM stores data temporarily while programs run." },
{ text: "Which memory is non-volatile?", options: ["ROM","RAM","Cache","Register"], correct: "ROM", explanation: "ROM keeps its contents even without power." },
{ text: "What is cache memory mainly used for?", options: ["Store frequently used data","Permanent backup","Display graphics","Store BIOS only"], correct: "Store frequently used data", explanation: "Cache memory improves speed by storing frequently accessed instructions and data." },
{ text: "Which of these is primary memory?", options: ["RAM","Pen Drive","Hard Disk","DVD"], correct: "RAM", explanation: "Primary memory includes RAM and ROM, directly related to CPU operations." },
{ text: "Which of these is read/write memory?", options: ["RAM","ROM","CD-ROM","DVD-ROM"], correct: "RAM", explanation: "RAM allows both reading and writing of data." },
{ text: "What does ROM stand for?", options: ["Read Only Memory","Random Only Memory","Read Open Memory","Run Only Memory"], correct: "Read Only Memory", explanation: "ROM stands for Read Only Memory." },
{ text: "Which memory is smallest in size but fastest?", options: ["Register","RAM","Hard Disk","SSD"], correct: "Register", explanation: "Registers have very small capacity but maximum speed." },
{ text: "Which storage device uses flash memory?", options: ["SSD","RAM","Cache","Register"], correct: "SSD", explanation: "SSD stores data using flash memory chips." },
{ text: "Which memory is inside CPU?", options: ["Register","ROM","Hard Disk","DVD"], correct: "Register", explanation: "Registers are tiny storage locations inside CPU." },
{ text: "Which memory helps in booting computer?", options: ["ROM","RAM","Cache","Hard Disk"], correct: "ROM", explanation: "ROM stores firmware such as BIOS required during boot process." },
{ text: "What type of memory is cache?", options: ["High-speed memory","Permanent memory","Optical memory","External memory"], correct: "High-speed memory", explanation: "Cache is high-speed memory used to reduce access time." },
{ text: "Which memory stores currently running programs?", options: ["RAM","ROM","CD","Pen Drive"], correct: "RAM", explanation: "Programs are loaded into RAM while running." },
{ text: "Which memory is closer to CPU than RAM?", options: ["Cache","Hard Disk","DVD","USB"], correct: "Cache", explanation: "Cache memory is physically and logically closer to CPU than RAM." },
{ text: "Which device is used for long-term storage?", options: ["Hard Disk","RAM","Register","Cache"], correct: "Hard Disk", explanation: "Hard disks are used for storing files permanently." },
{ text: "Which of these loses data on shutdown?", options: ["RAM","ROM","SSD","Hard Disk"], correct: "RAM", explanation: "RAM is volatile and clears after shutdown." },
{ text: "Which memory level is L1, L2, L3?", options: ["Cache","RAM","ROM","Disk"], correct: "Cache", explanation: "L1, L2 and L3 are levels of cache memory." },
{ text: "Which cache is fastest among L1, L2, L3?", options: ["L1","L2","L3","All same"], correct: "L1", explanation: "L1 cache is the smallest and fastest cache closest to CPU core." },
{ text: "Which cache usually has largest size?", options: ["L3","L1","Register","L2"], correct: "L3", explanation: "L3 cache is usually larger than L1 and L2." },
{ text: "Which memory unit stores one binary digit?", options: ["Bit","Byte","Nibble","Word"], correct: "Bit", explanation: "Bit is the smallest memory unit representing 0 or 1." },
{ text: "How many bits are in one byte?", options: ["8","4","16","2"], correct: "8", explanation: "One byte equals 8 bits." },
{ text: "How many bytes are in 1 KB (traditional)?", options: ["1024","1000","512","2048"], correct: "1024", explanation: "Traditionally 1 KB = 1024 bytes." },
{ text: "How many KB are in 1 MB (traditional)?", options: ["1024","100","512","2048"], correct: "1024", explanation: "Traditionally 1 MB = 1024 KB." },
{ text: "What is virtual memory?", options: ["Using disk as extra RAM","Permanent ROM","CPU register memory","Cache partition"], correct: "Using disk as extra RAM", explanation: "Virtual memory uses storage space to extend available RAM logically." },
{ text: "Which memory management technique divides memory into fixed blocks?", options: ["Paging","Segmentation","Caching","Spooling"], correct: "Paging", explanation: "Paging divides memory into fixed-size pages and frames." },
{ text: "Which memory management technique divides memory logically?", options: ["Segmentation","Paging","Caching","Buffering"], correct: "Segmentation", explanation: "Segmentation divides memory based on logical program units." },
{ text: "What is fragmentation?", options: ["Wasted memory space","Extra CPU speed","Data encryption","Cache miss"], correct: "Wasted memory space", explanation: "Fragmentation refers to unusable gaps in memory allocation." },
{ text: "Which fragmentation occurs in paging?", options: ["Internal fragmentation","External fragmentation","No fragmentation","Disk fragmentation only"], correct: "Internal fragmentation", explanation: "Paging may waste unused space inside allocated page frames." },
{ text: "Which fragmentation is common in variable partitions?", options: ["External fragmentation","Internal fragmentation","No fragmentation","Cache fragmentation"], correct: "External fragmentation", explanation: "Free memory gets split into scattered small blocks." },
{ text: "What is swapping?", options: ["Moving processes between RAM and disk","Changing CPU","Deleting files","Formatting disk"], correct: "Moving processes between RAM and disk", explanation: "Swapping temporarily moves processes to disk to free RAM." },
{ text: "What is page fault?", options: ["Requested page not in RAM","Keyboard error","CPU crash","Disk formatting issue"], correct: "Requested page not in RAM", explanation: "A page fault occurs when required page is absent from main memory." },
{ text: "Which memory allocation method gives contiguous blocks?", options: ["Contiguous allocation","Paging","Caching","Spooling"], correct: "Contiguous allocation", explanation: "Contiguous allocation assigns adjacent memory locations." },
{ text: "What is thrashing?", options: ["Excessive paging activity","Fast processing","ROM failure","Hard disk crash"], correct: "Excessive paging activity", explanation: "Thrashing happens when system spends too much time swapping pages." },
{ text: "Which algorithm replaces oldest page first?", options: ["FIFO","LRU","Optimal","Round Robin"], correct: "FIFO", explanation: "FIFO removes the page that entered memory first." },
{ text: "Which algorithm replaces least recently used page?", options: ["LRU","FIFO","FCFS","SJF"], correct: "LRU", explanation: "LRU removes the page not used for the longest time." },
{ text: "Which page replacement gives theoretical best result?", options: ["Optimal","FIFO","LRU","Random"], correct: "Optimal", explanation: "Optimal replaces the page that will not be used for longest future time." },
{ text: "What is a memory leak?", options: ["Unused allocated memory not released","Hard disk damage","Cache miss","ROM corruption"], correct: "Unused allocated memory not released", explanation: "Memory leak occurs when allocated memory is not freed after use." },
{ text: "Which language commonly requires manual memory freeing?", options: ["C","HTML","SQL","CSS"], correct: "C", explanation: "In C, programmers manually manage memory using malloc/free." },
{ text: "Which function allocates memory dynamically in C?", options: ["malloc()","printf()","scanf()","open()"], correct: "malloc()", explanation: "malloc() allocates memory dynamically during runtime." },
{ text: "Which function frees allocated memory in C?", options: ["free()","delete()","remove()","clear()"], correct: "free()", explanation: "free() releases dynamically allocated memory in C." },
{ text: "Which memory area stores local variables?", options: ["Stack","Heap","ROM","Cache"], correct: "Stack", explanation: "Local variables are generally stored in stack memory." },
{ text: "Which memory area stores dynamic objects?", options: ["Heap","Stack","Register","ROM"], correct: "Heap", explanation: "Heap memory is used for dynamic allocation at runtime." }
    ],
};


function loadQuiz(topic) {
    const questions = allQuestions[topic];

    if (!questions) {
        console.error("Topic not found!");
        return;
    }

    console.log("Loaded topic:", topic);

    // Example: show first question
    document.getElementById("questionTitle").innerText = questions[0].text;
}

// ==============================
// 📍 DETECT CURRENT PAGE
// ==============================
const pageName = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");


// ==============================
// 🎯 LOAD QUESTIONS FOR PAGE
// ==============================
const questionsData = allQuestions[pageName] || [];


// ==============================
// 🎮 QUIZ VARIABLES
// ==============================
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let seconds = 0;


// ==============================
// ⏱ TIMER FUNCTIONS
// ==============================
function updateTimerDisplay() {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    document.getElementById("timerDisplay").textContent = `${minutes}:${secs}`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}


// ==============================
// 📥 LOAD QUESTION
// ==============================
function loadQuestion() {

    if (questionsData.length === 0) {
        document.getElementById("questionTitle").textContent = "No questions available.";
        return;
    }

    const question = questionsData[currentQuestionIndex];

    document.getElementById("questionTitle").textContent = question.text;
    document.getElementById("progressIndicator").textContent =
        `Question ${currentQuestionIndex + 1} of ${questionsData.length}`;

    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";

   question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");

    const optionLetter = ["A", "B", "C", "D"][index];

    btn.onclick = () => checkAnswer(optionLetter);

    optionsContainer.appendChild(btn);
});

    document.getElementById("resultMessage").textContent =
        "Click any option to check answer";

    document.getElementById("explanationText").textContent = "";
}


// ==============================
// ✅ CHECK ANSWER
// ==============================
function checkAnswer(selectedOption) {

    const question = questionsData[currentQuestionIndex];

    const resultMessage = document.getElementById("resultMessage");
    const explanationText = document.getElementById("explanationText");

    const allButtons = document.querySelectorAll(".option-btn");

    // Disable all buttons after first click
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.style.pointerEvents = "none";
    });

    if (selectedOption === question.correct) {
        score++;
        resultMessage.textContent = "✅ Correct!";
    } else {
        const correctIndex = ["A","B","C","D"].indexOf(question.correct);
        const correctAnswer = question.options[correctIndex];

        resultMessage.textContent = `❌ Wrong! Correct: ${correctAnswer}`;
    }

    document.getElementById("scoreValue").textContent = score;
    explanationText.textContent = question.explanation;
}


// ==============================
// ➡️ NEXT QUESTION
// ==============================
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questionsData.length) {
        loadQuestion();
    } else {
        document.getElementById("questionTitle").textContent = "Quiz Completed!";
        document.getElementById("optionsContainer").innerHTML = "";
        document.getElementById("resultMessage").textContent =
            `Final Score: ${score}`;
    }
}


// ==============================
// 🔘 EVENT LISTENERS
// ==============================
document.addEventListener("DOMContentLoaded", function () {

    console.log("Page:", pageName);
    console.log("Questions loaded:", questionsData.length);

    loadQuestion();

    document.getElementById("nextQuestionBtn")
        ?.addEventListener("click", nextQuestion);

    document.getElementById("startTimerBtn")
        ?.addEventListener("click", startTimer);

    document.getElementById("stopTimerBtn")
        ?.addEventListener("click", stopTimer);
});
const infoBtn = document.getElementById("infoToggleBtn");
const explanationBox = document.getElementById("explanationText");

infoBtn.addEventListener("click", () => {
    if (explanationBox.style.display === "block") {
        explanationBox.style.display = "none";
    } else {
        explanationBox.style.display = "block";
    }
});