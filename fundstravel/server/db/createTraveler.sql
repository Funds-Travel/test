insert into user_table (email, password) values ($1, $2)
  returning *;
