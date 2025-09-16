const Stats = () => {
    return (
        <section className=" via-white to-blue-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#002291] pb-10 leading-8">¿Por que las fabricas nos eligen?</h2>
                <div className="pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
                        <div className="text-center shadow-md p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">500+</div>
                            <div className="text-sm text-white leading-4">Fábricas confían en nosotros</div>
                        </div>
                        <div className="text-center shadow-md p-2 rounded-lg bg-gradient-to-br from-blue-500  to-blue-700">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">99.9%</div>
                            <div className="text-sm text-white leading-4">Tiempo de actividad</div>
                        </div>
                        <div className="text-center shadow-md p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">24/7</div>
                            <div className="text-sm text-white leading-4">Soporte técnico</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
