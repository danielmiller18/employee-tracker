INSERT INTO department(department_name)


VALUES("Software Engineering"), ("Sales and Purchases"), ("Accounting"), ("Technology"), ("Google Marketing");

INSERT INTO role(title, salary, department_id)
VALUES("Software Engineer", 80000, 1), ("Senior Engineer" 155000, 1), ("CEO", 356200, 3), ("Lead", 323000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Daniel", "Miller", 1, 2), ("Huzaifa", "Sheikh", 1, null), ("Heisn", "Berg", 1, 2), ("John", "Cena", 2, 2), ("Harry", "Potter", 4, null);