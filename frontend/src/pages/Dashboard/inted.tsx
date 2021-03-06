import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Datatable from "components/Datatable";
import Barchart from "components/Barchart";
import DonutChart from "components/DonutChart";

function Dashboard() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Conversão de Vendas(%)</h5>
                        <Barchart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Conversão de Vendas(%)</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas as vendas</h2>
                </div>


                <Datatable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;