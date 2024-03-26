export const OpenHours = () => {
  return (
    <>
      <h2>ÖPPETTIDER</h2>
      <section className="flex-column gap-small font-bold">
        <article className="flex-row gap-small align-center">
          <div className="font-medium">Måndag:</div> 11:00-14:00, 16:30-22:00
        </article>
        <article className="flex-row gap-small align-center">
          <div className="font-medium">Tisdag:</div>
          11:00-14:00, 16:30-22:00
        </article>
        <article className="flex-row gap-small align-center">
          <div className="font-medium">Onsdag:</div>
          11:00-14:00, 16:30-23:00
        </article>
        <article className="flex-row gap-small align-center">
          <div className="font-medium">Torsdag:</div>
          11:00-14:00, 16:30-23:00
        </article>
        <article className="flex-row gap-small align-center">
          <div className="font-medium">Fredag:</div>
          11:00-14.00, 16:30 – 23:00
        </article>
        <article className="flex-row gap-small align-center">
          <div className="font-medium">Lördag:</div>
          16:30 – 23:00
        </article>
      </section>
    </>
  );
};
