export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/4e98c8d2-f258-4533-a6f3-d941b7318d99/files/8f30daa3-05ea-4992-95a4-cc30ed119f6b.jpg"
          alt="Мирский замок с высоты"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Наследие семи веков</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Мирский замок, Несвижский дворец, Лидская крепость — каждый камень хранит
          легенды о рыцарях, князьях и великих битвах белорусской земли.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Открыть свиток
        </button>
      </div>
    </div>
  );
}