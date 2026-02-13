class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year

    def display_info(self):
        return "Title: {}\nAuthor: {}\nYear: {}".format(self.title, self.author, self.year)

class Library:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def list_books(self):
        for book in self.books:
            print(book.display_info())

book1 = Book("My Python Book", "Me", 1999)
book2 = Book("Дивный новый мир", "Эрлан", 2000)

library = Library()
library.add_book(book1)
library.add_book(book2)

library.list_books()

