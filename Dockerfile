FROM paas-harbor.mychery.com/asdwjl/nginx:latest
RUN mkdir -p /data/apps/2024-omoda-jaecoo-master-ui
RUN chmod 755 /data/apps/2024-omoda-jaecoo-master-ui 
RUN mkdir -p /data/nginx/cache_temp
RUN chmod 755  /data/nginx/cache_temp
COPY . /data/apps/2024-omoda-jaecoo-master-ui
