from models import Animal, Dog, Cat

animal = Animal("Leo", 5, "Lion")
dog = Dog("Buddy", 3, "Golden Retriever")
cat = Cat("Whiskers", 2, True)

animals = [animal, dog, cat]

print("=== All Animals ===")
for a in animals:
    print(a)

print("\n=== Polymorphism: speak() ===")
for a in animals:
    print(a.speak())

print("\n=== Detailed Info ===")
for a in animals:
    print(a.info())

print("\n=== Unique Methods ===")
print(dog.fetch("ball"))
print(cat.purr())

print("\n=== Type Checking ===")
for a in animals:
    if isinstance(a, Dog):
        print(f"{a.name} is a {a.breed}")
    elif isinstance(a, Cat):
        status = "indoor" if a.indoor else "outdoor"
        print(f"{a.name} is an {status} cat")
    else:
        print(f"{a.name} is a generic {a.species}")
