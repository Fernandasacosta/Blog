import { Header } from "../../components/Header";
import { Card } from "./components/Card";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";

export function Home(){
  return(
    <>
     <Header/>
     <Profile/>
     <Search/>
     <Card/>
    </>
   
  )
}