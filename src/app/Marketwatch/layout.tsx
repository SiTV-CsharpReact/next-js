import classes from './layout.module.css'
const MarketwatchLayout = ({children,
}: {
  children: React.ReactNode
}) => {
    return (
        <div className={classes.layout}>
      Layout
        {children}
        </div>
    )
}
export default MarketwatchLayout ;