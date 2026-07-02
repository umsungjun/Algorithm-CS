class Animal {
    String name;
    Animal(String name) { this.name = name; }
}

class Dog extends Animal {
    Dog(String name) { super(name); }
    String bark() { return name + " 멍멍"; }
}

class Cat extends Animal {
    Cat(String name) { super(name); }
    String meow() { return name + " 야옹"; }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog("초코"); // 업캐스팅: 자식 객체를 부모 타입으로 참조

        if (a instanceof Cat) { // Dog는 Cat의 인스턴스가 아니므로 false
            Cat c = (Cat) a;
            System.out.println(c.meow());
        } else if (a instanceof Dog) { // a는 Dog의 인스턴스이므로 true
            Dog d = (Dog) a; // 다운캐스팅: 부모 객체를 자식 타입으로 참조
            System.out.println(d.bark());
        }
    }
}

/* 
 - 정답: 초코 멍멍
 */