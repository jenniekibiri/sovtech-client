

export const Spinner = () => {
    return (
        <div className="spinner">
          <div className="spinner-grow text-primary" role="status"></div>
          <div className="sr-only  text-white">
            <span>Loading please wait </span>
          </div>
        </div>
      );
}
