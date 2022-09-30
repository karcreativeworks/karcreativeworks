import progress_styles from "styles/common/progress.module.scss";

function PageLoader({ loading, color }: { loading: boolean; color?: string }) {
  return (
    <div className={progress_styles.container}>
      <span
        className={`${progress_styles.progress_loader} ${
          loading ? progress_styles.active : progress_styles.none
        } ${
          color === "primary"
            ? progress_styles.primary
            : progress_styles.secondary
        }`}
      />
    </div>
  );
}

export default PageLoader;
