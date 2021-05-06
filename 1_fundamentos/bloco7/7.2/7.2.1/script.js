// ================= Exercício 1 =================

const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone:${order.phoneNumber}, ${order.address.street}, Número: ${order.address.number}, AP: ${order.address.apartment}`;
};

console.log(customerInfo(order));

// ================= Exercício 2 =================

const orderModifier = (order) => {
  let customerName = (order.name = "Luiz Silva");
  let pizzas = (order.order.pizza = {
    mussarela: { amount: 1, price: 20 },
    calabresa: { amount: 1, price: 15 },
  });
  let payment = (order.payment.total = "50");
  console.log(
    `Olá ${customerName}, o total do seu pedido de ${Object.keys(
      order.order.pizza
    )} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`
  );
};

orderModifier(order);
