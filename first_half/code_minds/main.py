t = int(input("Enter the pick up time :"))
x_cordi = int(input("Enter the x_cordinate :"))
y_cordi = int(input("Enter the y coordinate :"))
p_cordi = int(input("Enter the P coordinate :"))
q_cordi = int(input("Enter the Q coordinate :"))
typei = str(input("P - passenger or C - courier :"))
cost = 0
# euclidian disstance formula

passengercost = (x_cordi + y_cordi) + (p_cordi + q_cordi)
corrercost = cost + (p_cordi + q_cordi)

# profit = euclidiandis(p_cordi,q_cordi)

# traveltime = euclidiandis(x_cordi,y_cordi)

if typei == "P":
    print("Its passenger")
    cost = 0
else:
    print("Its courier")
    cost = corrercost + passengercost

def cli(num):
    num = num * (x_cordi,y_cordi)
    # num = num * p_cordi
    return print("The profit is :", num)
    
print("Proft is :",cli(p_cordi))

order = int(input("Enter the order :"))
if order == 0:
    print("You can Pickup the orders :")
else:
    print("only 3 orders will be picked !")




