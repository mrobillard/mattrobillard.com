function convertElementToSpans(el: Element, text: string) {
    el.innerHTML = '';
    Array.from(text).forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.classList.add('placeholder');
      el.appendChild(span);
    });
}
  
export class TextDecodeAnimation {
    static instances: Array<TextDecodeAnimation> = [];
    static placeholderCharacters = '01';
    static placeholderCharacterArray = Array.from(this.placeholderCharacters);
  
    private el: Element;
    private speed: number;
    private text: string;
    private position: number;
    private lastUpdateTime: number;
    private animationId: number | null;
  
    constructor(el: Element, speed: number) {
      this.el = el;
      this.position = 0;
      this.lastUpdateTime = 0;
      this.text = el.textContent?.trim() || '';
      this.animationId = null;
      this.speed = speed;
    }
  
    start() {
      this.position = 0;
      this.lastUpdateTime = 0;
      convertElementToSpans(this.el, this.text);
      this.animationId = requestAnimationFrame(this.animateFrame.bind(this));
    }
  
    stop() {
      cancelAnimationFrame(this.animationId || 0);
    }
  
    private convertElementToCharacterSpans() {
      // Clear all elements out
      this.el.innerHTML = '';
  
      // Turn each character into an individual span
      Array.from(this.text).forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('placeholder');
        this.el.appendChild(span);
      });
    }
  
    private animateFrame() {
      if (this.position >= this.text.length) return;
  
      const currentTime = Date.now();
  
      // If we have passed the necessary time interval, increment position
      if (currentTime > this.lastUpdateTime + this.speed) {
        const characterSpanEl = this.el.children.item(this.position);
  
        if (!characterSpanEl) return;
  
        characterSpanEl.textContent = this.text[this.position];
        characterSpanEl.classList.remove('placeholder');
        this.position++;
        this.lastUpdateTime = currentTime;
      } else {
        const L = TextDecodeAnimation.placeholderCharacterArray.length;
  
        for (let i = this.position; i < this.text.length; i++) {
          const idx = Math.random() * L;
          const randomCharacterIndex = Math.floor(idx);
          const characterSpanEl = this.el.children.item(i);
  
          if (!characterSpanEl) return;
  
          characterSpanEl.textContent =
            TextDecodeAnimation.placeholderCharacterArray[randomCharacterIndex];
        }
      }
  
      this.animationId = requestAnimationFrame(this.animateFrame.bind(this));
    }
  
    static init(speed = 100) {
      this.instances = [];
      document.querySelectorAll('.text-decode-effect').forEach((el) => {
        const instance = new TextDecodeAnimation(el, speed);
        this.instances.push(instance);
        instance.start();
      });
    }
  
    static reset() {
      this.instances.forEach((instance) => {
        instance.start();
      });
    }
  
    static destroy() {
      this.instances.forEach((instance) => instance.stop());
      this.instances = [];
    }
}
