class Person {
     private String name;
     public Person(String val) {
         name = val;
     }
     public static String get() {
         return name; // static 메서드에서는 인스턴스 변수에 접근할 수 없음
     }
     public void print() {
         System.out.println(name);
     }
}
class Gamja {
    public static void main(String[] args) {
        Person p = new Person("gamja"); // Person 타입 변수에 생성자로 인스턴스 생성
        p.print();
    }
}