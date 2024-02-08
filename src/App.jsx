import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

    // const format = (username) => `@${username}`
    
    //const elonmusk = { isFollowing: true, username: "fcancino"} //solo se usa cuando el objeto es muy grande

  return (
    <div className="containerDiv">
        <span className="textSeccion">A quien seguir</span>
        <section className="App">
            <TwitterFollowCard 
                // formatUserName={format}
                initialIsFollowing={false}
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
                initialIsFollowing={true}
                username="fcancino" 
                name="Franco Cancino"
            />
            {/* <TwitterFollowCard 
                {...elonmusk}
                >
                Franco Cancino
            </TwitterFollowCard> */}

        </section>
    </div>
  );
}