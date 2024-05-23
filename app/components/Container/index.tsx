export const Container = (props) => {
  return (
    <section className="flex w-full justify-center px-4 lg:px-6 py-2.5">
      <div className="flex w-full flex-wrap justify-between items-center max-w-screen-lg">
        {props.children}
      </div>
    </section>
  )
}
