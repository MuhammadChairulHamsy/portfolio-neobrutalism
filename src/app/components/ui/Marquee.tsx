const Marquee = () => {
  const content = (
    <span className="mx-4 font-black text-sm md:text-base tracking-widest text-black">
      ★ OPEN FOR WORK ★ REACT ★ NEXT ★ EXPRESS ★ SUPABASE ★ CREATIVE ★ DESIGN ★
    </span>
  );

  return (
    <section className="w-full mt-10 bg-destructive border-y-3 border-black overflow-hidden py-5">
      <div className="marquee-wrapper animate-marquee">
        <div className="marquee-content">{content}</div>
        <div className="marquee-content" aria-hidden="true">{content}</div>
        <div className="marquee-content" aria-hidden="true">{content}</div>
        <div className="marquee-content" aria-hidden="true">{content}</div>
      </div>
    </section>
  );
};

export default Marquee