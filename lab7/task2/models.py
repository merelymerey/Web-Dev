class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def __str__(self):
        return f"{self.name} ({self.species}), age: {self.age}"

    def speak(self):
        return f"{self.name} makes a sound"

    def info(self):
        return f"Name: {self.name}, Age: {self.age}, Species: {self.species}"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def speak(self):
        return f"{self.name} says: Woof! Woof!"

    def fetch(self, item):
        return f"{self.name} fetches the {item}"

    def info(self):
        return f"{super().info()}, Breed: {self.breed}"


class Cat(Animal):
    def __init__(self, name, age, indoor):
        super().__init__(name, age, "Cat")
        self.indoor = indoor

    def speak(self):
        return f"{self.name} says: Meow!"

    def purr(self):
        return f"{self.name} is purring..."

    def info(self):
        location = "indoor" if self.indoor else "outdoor"
        return f"{super().info()}, Type: {location}"
