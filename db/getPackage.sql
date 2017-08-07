select *
from packages_table
where total_price <= $1;
