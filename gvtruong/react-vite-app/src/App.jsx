import "./App.css";
import {useState} from "react";
import {NewFeedItem} from "./components/NewFeedItem";
import {faker} from '@faker-js/faker'

function App() {
    const [feeds, setFeeds] = useState([])

    const addRandomFeed = () => {
        const newFeed = {
            title: faker.random.word(),
            content: faker.random.words(20),
            id: faker.random.numeric(10)
        }

        setFeeds([...feeds,newFeed])
    }

    const handleDeleteFeed = (_feed) =>{
       setFeeds(feeds.filter(feed => feed.id !== _feed.id))
    }

  return (
    <div>
        <button onClick={addRandomFeed}> add random feeds</button>
        <div>
            {feeds.map(feed => <NewFeedItem key={feed.id} {...feed} cb={() => handleDeleteFeed(feed)} />)}
        </div>
    </div>
  );
}

export default App;
