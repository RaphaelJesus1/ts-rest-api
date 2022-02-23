## :rocket: Run project

```
npm i
npm run build
npm start
```

## Database Schema

Run the script below to create all project tables. It was created to be alocated in MySQL Workbench.

```SQL
CREATE SCHEMA wings;

CREATE TABLE wings.seat (
	seat_id INT auto_increment NOT NULL,
    name VARCHAR(10) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,

    PRIMARY KEY (seat_id)
);

CREATE TABLE wings.airport (
	airport_id INT auto_increment NOT NULL,
    name VARCHAR(200) NOT NULL,
    address VARCHAR(300) NOT NULL,
    city VARCHAR(200) NULL,
    country VARCHAR(200) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,

    PRIMARY KEY (airport_id)
);

CREATE TABLE wings.client(
	client_id INT auto_increment NOT NULL,
    name VARCHAR(300) NULL,
    document VARCHAR(20) NOT NULL,
    phone_number VARCHAR(13) NULL,
    email VARCHAR(100) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,

    PRIMARY KEY (client_id)
);

CREATE TABLE wings.flight (
	flight_id INT auto_increment NOT NULL,
    departure_time TIMESTAMP NOT NULL,
    arrival_time TIMESTAMP NOT NULL,
    origin_airport_id INT NOT NULL,
    final_airport_id INT NOT NULL,
    seat_amount INT NOT NULL,
    ticket_price FLOAT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,

    PRIMARY KEY (flight_id),
    FOREIGN KEY (origin_airport_id) REFERENCES wings.airport(airport_id),
    FOREIGN KEY (final_airport_id) REFERENCES wings.airport(airport_id)
);

CREATE TABLE wings.ticket (
	ticket_id INT auto_increment NOT NULL,
    flight_id INT NOT NULL,
    client_id INT NOT NULL,
    seat_id INT NOT NULL,
    purchase_date DATETIME NOT NULL DEFAULT current_timestamp,,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,

    PRIMARY KEY (ticket_id),
    FOREIGN KEY (flight_id) REFERENCES wings.flight(flight_id),
    FOREIGN KEY (client_id) REFERENCES wings.client(client_id),
    FOREIGN KEY (seat_id) REFERENCES wings.seat(seat_id)
);

CREATE TABLE wings.flight_seat(
	flight_id INT NOT NULL,
    seat_id INT NOT NULL,
    available TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,

    FOREIGN KEY (flight_id) REFERENCES wings.flight(flight_id),
    FOREIGN KEY (seat_id) REFERENCES wings.seat(seat_id)
);
```
