from pandas import read_excel

ex = read_excel("./products.xlsx")
data = ex.to_json()

columns = []

for column in ex.columns:
    columns.append(column)


print(columns)
print(data)
