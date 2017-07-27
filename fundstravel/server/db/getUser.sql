select user_table.email, funds.balance, funds.goal
from user_table
  join funds
    on funds.user_id = user_table.id
where user_table.email = $1;
