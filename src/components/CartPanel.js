import { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export function CartPanel({ show, setShow, item, setItem }) {
  const [total, setTotal] = useState(0);

  // Removing an item from the cart and refreshing it at the same time.
  const removeItem = (index) => {
    item.splice(index, 1);

    const updatedItems = item.filter((elem) => {
      return elem;
    });

    if (item.length === 0) {
      setShow("none");
    } else {
      setItem(updatedItems);
    }
  };

  // Addition function to find the total price
  const sum = () => {
    let addition = 0;
    for (let i = 0; i < item.length; i++) {
      addition += item[i].price;
    }

    setTotal(addition);
  };

  useEffect(() => {
    sum();
  }, [item]);

  return (
    // Cart panel which is displayed on click of the cart button if there are items in it.
    <Card>
      <div className="cartPanel" style={{ display: show }}>
        <div className="checkout">
          <div>
            <h2 style={{ marginBottom: "0" }}>Cart</h2>
            <Button
              className="closebtn"
              variant="outline-dark"
              size="sm"
              onClick={() => setShow("none")}
            >
              X
            </Button>
          </div>
          <hr style={{ width: "100%" }} />

          <div style={{ width: "100%" }}>
            {item.map((cartItems, index) => {
              return (
                <div key={index}>
                  <Row>
                    <Col className="cartRow">
                      <h6>{cartItems.title}</h6>
                    </Col>
                    <Col className="cartRow">
                      <p>${cartItems.price}</p>
                    </Col>
                    <Col className="cartRow">
                      <Button
                        variant="outline-danger"
                        onClick={() => removeItem(index)}
                        block
                      >
                        X
                      </Button>
                    </Col>
                  </Row>
                  <hr />
                </div>
              );
            })}
          </div>

          {/* Total price of the cart */}
          <div style={{ textAlign: "center", width: "100%" }}>
            <h3>${total}</h3>
          </div>

          <hr style={{ width: "100%" }} />

          {/* Dummy checkout button */}
          <div style={{ width: "100%" }}>
            <Button variant="outline-info" block>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
