// 제네릭 클래스 (큐 방식으로 동작하는 클래스)
// 큐: 선형 자료구조, FIFO (first-in-first-out)

class GenericQueue<T>{
    private items: T[] = [];

    // enqueue 메서드 (큐를 데이터에 추가)
    enqueue(item: T): void {
        this.items.push(item);
    }
    // dequeue 메서드 (큐의 맨처음 데이터를 꺼냄)
    dequeue(): T | undefined {
        return this.items.shift(); // 맨처음 아이템 꺼냄
    }
    // peek 메서드 (큐의 맨처음 데이터를 확인, 꺼내지는 않음)
    peek(): T | undefined {
        return this.items[0]; // 맨처음 아이템 반환
    }
    // size 메서드 (현재 큐의 사이즈 반환)
    size(): number {
        return this.items.length;
    }
}

const stringQ = new GenericQueue<string>();
stringQ.enqueue("Hello");
console.log(stringQ.peek());
stringQ.dequeue();
stringQ.enqueue("TypeSccript");
console.log(stringQ.size());
console.log(stringQ.peek());
