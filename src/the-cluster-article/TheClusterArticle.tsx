import React from "react";

const TheClusterArticle = (): JSX.Element => {
    return (
        <div className="the-cluster-article">
            <h2>The story of building a pi-cluster</h2>

            <h3>What have I built?</h3>
            <p>
                Cluster at home. Built with three raspberry pi 4`&apos;`s (Planning to add more when necessary). It is
                running kubernetes. The pi`&apos;`s are running Ubuntu. Github actions (or anything else) can be used to
                automatially deploy applications to the cluster. The cluster uses Traefik to
            </p>

            <h3>Why did I want to build this?</h3>
            <ul>
                <li>`&quot;`Free`&quot;` to deploy any apps I want</li>
                <li>
                    Practice Docker and Kubernetes, and all sorts of other things that must be set up. For example
                    setting up servers, tls, automatic build and deploy pipelines, ingresses, etc. It can be expensive
                    to run a full kubernetes cluster in the cloud just for practice and fun.
                </li>
                <li>
                    Have a place where all things has to be done by oneself, instead of just clicking buttons at a cloud
                    provider.
                </li>
            </ul>

            <h3>How did I set it all up (short version)?</h3>
            <p>
                Most of setting it up came down to finding people that had done exactly the same, or at least something
                similar. Since people are so awesome, I could basically just follow some different guides that I found,
                and patch those together, kind of. I would like to give a lot of credit to those that have made all
                these guides. Here is a short step by step list for how I set up the cluster with links to sources that
                I used for each step:
            </p>
            <ul>
                <li>
                    <h3>Inspiration and buying hardware</h3>
                    <p>
                        <a href="https://youtu.be/qv3_gLvjITk" target="_blank" rel="noopener noreferrer">
                            A video by LearnLinuxTV on youtube
                        </a>
                    </p>
                    <p>
                        I got inspired by this video. I used this video to buy hardware, install Ubuntu on each Pi, and
                        hook it all up and verifying that they were all running and available on my local network. Link
                        youtube
                    </p>
                </li>
                <li>
                    <h4>Setting up servers</h4>
                    <p>
                        <a
                            href="https://www.udacity.com/course/configuring-linux-web-servers--ud299"
                            target="_blank"
                            rel="noopener noreferrer">
                            Udacity server setup
                        </a>
                    </p>
                    <p>
                        I used this video to practice setting up servers, and of course again learning a lot. Mostly I
                        used Lesson 2.
                    </p>
                </li>
                <li>
                    <h4>Install kubernetes</h4>
                    <p>
                        <a href="https://youtu.be/N4bfNefjBSw" target="_blank" rel="noopener noreferrer">
                            A video by Jeff Geerling on youtube
                        </a>
                    </p>
                    <p>
                        This awesome video increased my understanding a lot of the whole thing. I used the same approach
                        as Jeff Geerling to install Kubernetes on all the Pi`&apos;`s with the Ansible playbook that he
                        mentioned.
                    </p>
                </li>
                <li>
                    <h4>Grafana and cluster-metrics</h4>
                    <p>
                        <a href="https://youtu.be/IafVCHkJbtI" target="_blank" rel="noopener noreferrer">
                            A video by Jeff Geerling on youtube
                        </a>
                    </p>
                    <p>
                        I followed Jeff Geerling`&apos;`s guide to install Prometheus and Grafana on the cluster by use
                        of the mentioned Ansible Playbook.
                    </p>
                </li>
            </ul>
            <p>At this point the most important stuff has been set up, but I still had some</p>
        </div>
    );
};

export default TheClusterArticle;
