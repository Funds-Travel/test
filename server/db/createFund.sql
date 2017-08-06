insert into funds (user_id) 
values ($1)
  returning *;
