from core.models import Cart

def add_to_cart(new_item):
    cart = Cart(description=new_item)
    cart.save()
    return cart.to_dict_json()


def remove_from_cart(remove_item):
    cart = Cart(description=remove_item)
    cart.save()
    return cart.to_dict_json()
    

def cart_list():
    carts = Cart.objects.all()
    return [cart.to_dict_json() for cart in carts]
