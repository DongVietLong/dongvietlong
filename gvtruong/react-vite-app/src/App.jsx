import "./App.css";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { Button, Row } from "reactstrap";
import CardFeed from "./components/CardFeed";
import FormController from "./components/FormController";

function App() {
  const [feeds, setFeeds] = useState([]);

  const addRandomFeed = () => {
    const newFeed = {
      title: faker.random.word(),
      content: faker.random.words(20),
      id: faker.random.numeric(10),
    };

    setFeeds([...feeds, newFeed]);
  };

  const handleDeleteFeed = (_feed) => {
    setFeeds(feeds.filter((feed) => feed.id !== _feed.id));
  };

  return (
    <div>
      {/* <Button onClick={addRandomFeed} color="primary" outline size={"lg"}>
        add random feeds
      </Button>
      <Row>
        {feeds.map((feed) => (
          <CardFeed
            key={feed.id}
            {...feed}
            cb={() => handleDeleteFeed(feed)}
          />
        ))}
      </Row> */}
      <FormController />
    </div>
  );
}

export default App;
