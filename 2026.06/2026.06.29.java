abstract class Vehicle {
    String name;
    abstract public String getName(String val);
    public String getName() {
        return "Vehicle name:" + name; // 4. name 필드의 값을 반환
    }
    public void setName(String val) {
        name = val; // 3. name 필드에 값 설정
    }
}

class Car extends Vehicle {
    public Car(String val) {
        setName(val); // 2. 부모 클래스의 setName 메서드를 호출하여 name 필드에 값 설정
    }
    public String getName(String val) {
        return "Car name:" + val;
    }
    public String getName(byte val[]) {
        return "Car name:" + val;
    }
}

public class Gamja {
    public static void main(String[] args) {
        Vehicle obj = new Car("Spark"); // 1. Vehicle 타입의 obj에 Car 객체를 생성하여 할당
        System.out.println(obj.getName()); // Vehicle name: Spark
    }
}