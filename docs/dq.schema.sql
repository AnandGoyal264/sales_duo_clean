CREATE DATABASE IF NOT EXISTS salesduo_ai;
USE salesduo_ai;

CREATE TABLE IF NOT EXISTS optimizations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  asin VARCHAR(20) NOT NULL,
  original_title TEXT,
  original_bullets TEXT,
  original_description TEXT,
  optimized_title TEXT,
  optimized_bullets TEXT,
  optimized_description TEXT,
  keywords TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_optimizations_asin ON optimizations (asin);
