#### 금융 상품 테이블

CREATE TABLE financial_products (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    type ENUM('account', 'savings', 'loan') NOT NULL,

    description TEXT,

    interest_rate DECIMAL(4, 2),

    term_months INT,

    min_amount DECIMAL(15, 2),

    max_amount DECIMAL(15, 2),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
