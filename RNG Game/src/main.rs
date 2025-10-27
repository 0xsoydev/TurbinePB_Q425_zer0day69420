use std::io;
// use rand::Rng;
use rand;
use std::cmp::Ordering;

fn main() {
    println!("Guess the number!");
    // let secret_number = rand::thread_rng().gen_range(1..=100);
    let secret_number = rand::random_range(1..=100);
    println!("The secret number is {secret_number}");

    // let mut guess = String::new();

    loop {
        println!("Please input your guess.");
        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {guess}");

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too less!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal =>  {
                println!("You win!");
                break;
            }
        }
    }
}
