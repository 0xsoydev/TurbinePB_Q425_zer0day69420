use std::io::{self, Write};

struct Counter {
    value: i64,
}

impl Counter {
    fn new() -> Self {
        Counter { value: 0 }
    }

    fn increment(&mut self) {
        self.value += 1;
        println!("Counter incremented to: {}", self.value);
    }

    fn decrement(&mut self) {
        self.value -= 1;
        println!("Counter decremented to: {}", self.value);
    }

    fn increment_by(&mut self, amount: i64) {
        self.value += amount;
        println!("Counter incremented by {} to {}", amount, self.value);
    }

    fn decrement_by(&mut self, amount: i64) {
        self.value -= amount;
        println!("Counter decremented by {} to {}", amount, self.value);
    }

    fn get_value(&self) {
        println!("Current counter value: {}", self.value);
    }

    fn reset(&mut self) {
        self.value = 0;
        println!("Counter value has been reset!");
    }
}

fn main() {
    let mut counter = Counter::new();

    loop {
        println!("1. Increment Value");
        println!("2. Decrement Value");
        println!("3. Increment by amount");
        println!("4. Decrement by amount");
        println!("5. Reset Counter");
        println!("6. Display current counter");
        println!("7. Exit");

        io::stdout().flush().expect("Error Occured");

        let mut choice = String::new();
        io::stdin()
            .read_line(&mut choice)
            .expect("Error writing to the string");

        match choice.trim() {
            "1" => counter.increment(),
            "2" => counter.decrement(),
            "3" => {
                println!("Enter the amount to increment: ");
                io::stdout().flush().expect("Error Occured");

                let mut amount = String::new();
                io::stdin()
                    .read_line(&mut amount)
                    .expect("Error when taking amount input");

                if let Ok(num) = amount.trim().parse::<i64>() {
                    counter.increment_by(num);
                } else {
                    println!("Invalid Number!");
                }
            }

            "4" => {
                println!("Enter the amount to decrement: ");
                io::stdout().flush().expect("Error Occured");

                let mut amount = String::new();
                io::stdin()
                    .read_line(&mut amount)
                    .expect("Error when taking amount input");

                if let Ok(num) = amount.trim().parse::<i64>() {
                    counter.decrement_by(num);
                } else {
                    println!("Invalid Number!");
                }
            }
            "5" => counter.reset(),
            "6" => counter.get_value(),
            "7" => {
                println!("Exiting...");
                break;
            }
            _ => println!("Invalid Choice!, please try again"),
        }
    }
}
