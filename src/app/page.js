
import { A } from "@/A/A";
import { B } from "@/B/B";
import { C } from "@/C/C";
import { D } from "@/D/D";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from "@/Bootstrap/bootstrapComp";

export default function App() {

  return (
   <div className="p-2 m-3">
    <A/>
    <B/>
    <C/>
    <D/>
   </div>
  );
}
