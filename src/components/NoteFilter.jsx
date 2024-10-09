const NoteFilter = ({ setFilterPriority }) => {




    return (
        <div>
            <select onChange={e => setFilterPriority(e.currentTarget.value)}>
                <option value='Todas'>Todas</option>
                <option value='Baja'>Baja</option>
                <option value='Media'>Media</option>
                <option value='Alta'>Alta</option>
            </select>
        </div>
    )

}

export default NoteFilter;