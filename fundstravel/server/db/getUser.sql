select user_table.email, funds.balance, funds.goal, funds.user_email
from user_table
  join funds
    on funds.user_id = user_table.id
where funds.user_email = $1;
