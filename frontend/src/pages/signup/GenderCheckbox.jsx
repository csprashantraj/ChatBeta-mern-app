const GenderCheckbox = () => {
    return (
        <div className='flex p-2 pb-0'>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox border-white-500"/>
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox border-white-500"/>
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox;