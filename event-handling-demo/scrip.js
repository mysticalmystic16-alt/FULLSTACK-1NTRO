class EventDemo {
    constructor() {
        this.eventCount = 0;
        this.isPaused = false;
        this.events = [];
        this.lastTime = performance.now();
        this.frameCount = 0;
        
        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.startPerformanceMonitor();
        this.logEvent('🚀 Demo initialized - 15+ events ready!');
    }

    cacheElements() {
        this.elements = {
            outputArea: document.getElementById('outputArea'),
            eventCount: document.getElementById('eventCount'),
            clearBtn: document.getElementById('clearBtn'),
            pauseBtn: document.getElementById('pauseBtn'),
            filterBtn: document.getElementById('filterBtn'),
            performance: document.getElementById('performance'),
            fps: document.getElementById('fps'),
            memory: document.getElementById('memory'),
            
            // Event elements
            clickBtn: document.getElementById('clickBtn'),
            dblClickBtn: document.getElementById('dblClickBtn'),
            nameInput: document.getElementById('nameInput'),
            emailInput: document.getElementById('emailInput'),
            selectInput: document.getElementById('selectInput'),
            demoForm: document.getElementById('demoForm'),
            keyupInput: document.getElementById('keyupInput'),
            keyInfo: document.getElementById('keyInfo'),
            mouseBox: document.getElementById('mouseBox'),
            mouseCoords: document.getElementById('mouseCoords'),
            draggable: document.getElementById('draggable'),
            dropzone1: document.getElementById('dropzone1'),
            dropzone2: document.getElementById('dropzone2'),
            touchArea: document.getElementById('touchArea'),
            rangeInput: document.getElementById('rangeInput'),
            rangeValue: document.getElementById('rangeValue'),
                        toggleInput: document.getElementById('toggleInput')
        };
    }

    bindEvents() {
        // Basic Events
        this.elements.clickBtn.addEventListener('click', (e) => this.handleEvent(e, 'click'));
        this.elements.dblClickBtn.addEventListener('dblclick', (e) => this.handleEvent(e, 'double-click'));

        // Form Events
        this.elements.demoForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        this.elements.nameInput.addEventListener('input', (e) => this.handleEvent(e, 'input'));
        this.elements.emailInput.addEventListener('blur', (e) => this.handleEvent(e, 'blur'));
        this.elements.selectInput.addEventListener('change', (e) => this.handleEvent(e, 'change'));

        // Keyboard Events
        this.elements.keyupInput.addEventListener('keyup', (e) => this.handleKeyEvent(e));
        this.elements.keyupInput.addEventListener('keydown', (e) => this.handleKeyEvent(e, 'keydown'));

        // Mouse Events
        this.elements.mouseBox.addEventListener('mousemove', (e) => this.throttle(this.handleMouseMove, 16, e));
        this.elements.mouseBox.addEventListener('mouseenter', (e) => this.handleEvent(e, 'mouseenter'));
        this.elements.mouseBox.addEventListener('mouseleave', (e) => this.handleEvent(e, 'mouseleave'));

        // Drag & Drop
        this.elements.draggable.addEventListener('dragstart', (e) => this.handleDragStart(e));
        this.elements.dropzone1.addEventListener('dragover', (e) => this.handleDragOver(e));
        this.elements.dropzone1.addEventListener('drop', (e) => this.handleDrop(e, 'Zone 1'));
        this.elements.dropzone2.addEventListener('dragover', (e) => this.handleDragOver(e));
        this.elements.dropzone2.addEventListener('drop', (e) => this.handleDrop(e, 'Zone 2'));

        // Touch Events
        this.elements.touchArea.addEventListener('touchstart', (e) => this.handleTouchEvent(e, 'touchstart'));
        this.elements.touchArea.addEventListener('touchmove', (e) => this.handleTouchEvent(e, 'touchmove'));
        this.elements.touchArea.addEventListener('touchend', (e) => this.handleTouchEvent(e, 'touchend'));

        // Advanced Events
        this.elements.rangeInput.addEventListener('input', (e) => this.handleRangeChange(e));
        this.elements.toggleInput.addEventListener('change', (e) => this.handleEvent(e, 'toggle'));

        // Controls
        this.elements.clearBtn.addEventListener('click', () => this.clearOutput());
        this.elements.pauseBtn.addEventListener('click', () => this.togglePause());
        this.elements.filterBtn.addEventListener('click', () => this.toggleFilter());

        // Global Events
        document.addEventListener('visibilitychange', () => this.handleVisibilityChange());
        window.addEventListener('resize', this.throttle(() => this.logEvent('📱 Window resized'), 250));
        window.addEventListener('online', () => this.logEvent('🌐 Back online'));
        window.addEventListener('offline', () => this.logEvent('❌ Offline'));
    }

    handleEvent(event, eventName) {
        if (this.isPaused) return;
        
        const details = this.getEventDetails(event);
        this.logEvent(`${this.getEventIcon(event.type)} ${eventName.toUpperCase()}: ${details}`);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        this.logEvent(`📤 FORM SUBMIT: ${JSON.stringify(data)}`);
        e.target.reset();
    }

    handleKeyEvent(e, type = 'keyup') {
        const keyInfo = `Key: "${e.key}" (code: ${e.code}, keyCode: ${e.keyCode})`;
        this.elements.keyInfo.innerHTML = `
            <span>Key: <strong>${e.key}</strong></span>
            <span>Code: <strong>${e.code}</strong></span>
            <span>Modifiers: <strong>${e.ctrlKey ? 'Ctrl+' : ''}${e.shiftKey ? 'Shift+' : ''}${e.altKey ? 'Alt+' : ''}${e.metaKey ? 'Meta+' : ''}</strong></span>
        `;
        this.logEvent(`⌨️ ${type.toUpperCase()}: ${keyInfo}`);
    }

    handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
        const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
        this.elements.mouseCoords.textContent = `Mouse: ${x}%, ${y}% (${e.clientX.toFixed(0)}, ${e.clientY.toFixed(0)})`;
    }

    handleDragStart(e) {
        e.dataTransfer.setData('text/plain', 'draggable-item');
        this.logEvent('🐱 DRAG START: Item grabbed');
    }

    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    }

    handleDrop(e, zoneName) {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');
        const data = e.dataTransfer.getData('text/plain');
        this.logEvent(`✅ DROP: Item dropped in ${zoneName}`);
    }

    handleTouchEvent(e, type) {
        e.preventDefault();
        const touches = e.touches.length;
        let details = `Touches: ${touches}`;
        
        if (touches > 0) {
            details += ` | Touch 1: (${e.touches[0].clientX.toFixed(0)}, ${e.touches[0].clientY.toFixed(0)})`;
        }
        
        this.logEvent(`📱 ${type.toUpperCase()}: ${details}`);
    }

    handleRangeChange(e) {
        const value = e.target.value;
        this.elements.rangeValue.textContent = value;
        this.logEvent(`🎚️ RANGE: ${value}%`);
    }

    handleVisibilityChange() {
        const status = document.hidden ? 'hidden' : 'visible';
        this.logEvent(`👁️ PAGE VISIBILITY: ${status.toUpperCase()}`);
    }

    getEventIcon(type) {
        const icons = {
            click: '',
            dblclick: '🔘',
            input: '⌨️',
            change: '🔄',
            submit: '📤',
            keyup: '⌨️',
            keydown: '⌨️',
            mouseenter: '➡️',
            mouseleave: '⬅️',
            focus: '🎯',
            blur: '👋',
            dragstart: '🐱',
            drop: '✅'
        };
        return icons[type] || '⚡';
    }

    getEventDetails(event) {
        const details = [];
        
        if (event.target.id) details.push(`#${event.target.id}`);
        if (event.target.tagName) details.push(event.target.tagName.toLowerCase());
        
        if (event.target.value !== undefined) {
            details.push(`"${event.target.value.slice(0, 20)}${event.target.value.length > 20 ? '...' : ''}"`);
        }
        
        if (event.clientX || event.clientY) {
            details.push(`(${event.clientX?.toFixed(0) ?? 0}, ${event.clientY?.toFixed(0) ?? 0})`);
        }
        
        return details.join(' ');
    }

    logEvent(message) {
        if (this.isPaused) return;
        
        this.eventCount++;
        this.elements.eventCount.textContent = this.eventCount;
        
        const eventDiv = document.createElement('div');
        eventDiv.className = 'output-event';
        eventDiv.innerHTML = `<strong>${new Date().toLocaleTimeString()}</strong> ${message}`;
        this.elements.outputArea.appendChild(eventDiv);
        
        this.elements.outputArea.scrollTop = this.elements.outputArea.scrollHeight;
        this.events.push({ timestamp: Date.now(), message });
    }

    clearOutput() {
        this.elements.outputArea.innerHTML = '';
        this.eventCount = 0;
        this.elements.eventCount.textContent = '0';
        this.logEvent('🧹 Console cleared');
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        this.elements.pauseBtn.textContent = this.isPaused ? '▶️ Resume' : '⏸️ Pause';
        this.elements.pauseBtn.className = this.isPaused ? 'btn-success btn-small' : 'btn-small';
    }

    toggleFilter() {
        // Simple filter toggle (expandable)
        this.logEvent('🔍 Filter toggled (feature coming soon)');
    }

    // Performance Monitoring
    startPerformanceMonitor() {
        const loop = () => {
            this.updateFPS();
            this.updateMemory();
            requestAnimationFrame(loop);
        };
        loop();
    }

    updateFPS() {
        const now = performance.now();
        this.frameCount++;
        
        if (now >= this.lastTime + 1000) {
            const fps = Math.round((this.frameCount * 1000) / (now - this.lastTime));
            this.elements.fps.textContent = fps;
            this.frameCount = 0;
            this.lastTime = now;
        }
    }

    updateMemory() {
        if ('memory' in performance) {
            const memory = performance.memory;
            const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
            this.elements.memory.textContent = `${usedMB}MB`;
        }
    }

    // Utilities
    throttle(func, limit, ...args) {
        if (!this.throttleLastCall || now - this.throttleLastCall > limit) {
            func.apply(this, args);
            this.throttleLastCall = now;
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new EventDemo());
} else {
    new EventDemo();
}

// Service Worker Registration (PWA ready)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Ignore service worker errors
        });
    });
}