import Categories from "../app/components/Categories";
import PropertyList from "./components/properties/PropertyList";

export default function Home() {
  return (
    <main className=" w-4/5 mx-auto  ">

      <Categories />
      <div className=" mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5"><PropertyList /></div>

    </main>
  );
}
