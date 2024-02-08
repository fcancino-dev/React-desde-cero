import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

    // const format = (username) => `@${username}`
    
    const elonmusk = { isFollowing: true, username: "fcancino"} //solo se usa cuando el objeto es muy grande

  return (
    <section className="App">
        <TwitterFollowCard 
            // formatUserName={format}
            username="midudev" 
            name="Miguel Angel Duran"
        />
        <TwitterFollowCard 
            username="pheralb" 
            name="Pablo Hernandez"
        />
        <TwitterFollowCard 
            // username="elonmusk" 
            name="Elon Musk"
        />
        <TwitterFollowCard 
            username="fcancino" 
            name="Franco Cancino"
        />
        {/* <TwitterFollowCard 
            {...elonmusk}
        >
            Franco Cancino
        </TwitterFollowCard> */}

    </section>
  );
}