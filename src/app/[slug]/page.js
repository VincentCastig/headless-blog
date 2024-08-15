import Image
    from "next/image";
import styles from './style.module.scss';

const BlogDetails = () => (
    <div className="container pb-80">
        <div className="row mb-50">
            <div className="col col_9">
                <div className={`h6 mb-20 c-orange`}>Product Reviews</div>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tortor pretium convallis.</h3>
            </div>
        </div>

        <Image className={`${styles.featuredImage} mb-50`} src={'/download.png'}
            alt='Placeholder Image'
            fill={false} width="1280" height="387" />

        <div className="row mb-50">
            <div className="col col_9">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p>
                Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
                </p>
                <p>
                Alexander Magnus, natus in Macedonia, fuit rex et dux militum singulari ingenio ac virtute praeditus. Ab ineunte aetate ingenii ac animorum potentiam ostendit, et post patris Philippi II mortem, regnum Macedonicum adeptus est. Exercitu suo fortissimo, vastas terras ab Europa usque ad Indiam subiec
                </p>
            </div>
        </div>
    </div>
);

export default BlogDetails;