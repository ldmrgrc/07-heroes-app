import { HeroList } from "../../hero/HeroList"

export const DcScreen = () => {
  const publisher = 'DC Comics';
  
  return (
    <div>
        <h1>DcScreen</h1>
        <hr />
        <HeroList publisher={publisher}/>
    </div>
  )
}
