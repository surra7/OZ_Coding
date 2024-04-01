// 5. 제네릭 클래스
// class Item<T>{
//     #content: T | null;
//     constructor() {
//         this.#content = null;
//     }
//     setItem(value: T) {
//         this.#content = value;
//     }
//     getItem(): T | null{
//         return this.#content;
//     }
// }
// const numberItem = new Item<number>();
// numberItem.setItem(100);
// numberItem.getItem(); // 100 반환
// const stringItem = new Item<string>();
// stringItem.setItem("Hello");
// stringItem.getItem(); // Hello 반환
// 클래스와 인터페이스를 함께 사용
// interface User {
//     id: number;
//     name: string;
// }
// interface Product{
//     id: number;
//     price: number;
//     name: string;
// }
// interface WithId{
//     id: number;
// }
// 제네릭의 제약 
// extends WithId -> Store 제네릭 인터페이스안의 모든 객체들은 id: number라는 속성을 가지고 있어야만 함
// interface Store<T extends WithId> { 
//     findById(id: number): T | undefined; // user를 id로 찾는 메서드
//     save(item: T): void; // user를 저장하는 메서드
// }
// class UserRepository implements Store<User>{
//     #users: User[] = [];
//     findById(id: number): User | undefined {
//         return this.#users.find(user => user.id === id);
//     }
//     save(user: User): void {
//         this.#users.push(user);
//     }
// }
// const userRepo = new UserRepository();
// userRepo.save({
//     id: 1,
//     name: "Josh"
// })
// userRepo.save({
//     id: 2,
//     name: "Amy"
// })
// console.log(userRepo.findById(1));
// class ProductRepository implements Store<Product>{
//     #products: Product[] = [];
//     findById(id: number): Product | undefined{
//         return this.#products.find((product) => product.id === id);
//     }
//     save(product: Product): void{
//         this.#products.push(product);
//     }
// }
// const productRepo = new ProductRepository();
// productRepo.save({
//     id: 10,
//     price: 100,
//     name: "Keyboard",
// });
// productRepo.save({
//     id: 20,
//     price: 200,
//     name: "Mouse",
// });
// console.log(productRepo.findById(20));
