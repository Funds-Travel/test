select funds.balance, funds.goal, funds.user_email
from funds
where funds.user_email = $1;
