import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import io from 'socket.io-client';

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const socket = io('http://localhost:5000');  

  useEffect(() => {
    fetchData();

    socket.on('newItem', handleNewItem);
    return () => {
      socket.off('newItem', handleNewItem);
      socket.disconnect();
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/posts');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleNewItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div>
      <Row gutter={[30, 16]}>
        {items.map((item) => (
          <Col  key={item.id} xs={24} sm={12} md={8} lg={100}>
            <Card >
              <img style={{width:"60px",borderRadius:"50%"}} src="https://avatars.mds.yandex.net/i?id=022e69ef42d8fcad956a99f28c9519e7-2855903-images-thumbs&n=13"/>
              <h6 style={{fontWeight:"bold",marginTop:"10px"}}>{item.title}</h6>
              <p>{item.body}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemsPage;
